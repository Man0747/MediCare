import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin } from 'lucide-react';
import Image from 'next/image';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function formatTime(timeString) {
  const date = new Date(timeString);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

function BookingList({ appointments, expired }) {
  const [loading, setLoading] = useState(false);
  const [appointmentList, setAppointmentList] = useState(appointments); // State for storing appointments

  const handleCancel = async (appointmentId) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:8080/appointments/${appointmentId}`);
      if (response.status === 200) {
        console.log('Appointment cancelled successfully');
        // Remove the cancelled appointment from the list
        setAppointmentList(prevAppointments => prevAppointments.filter(appointment => appointment.appointment_Id !== appointmentId));
        toast.success('Booking deleted');
      } else {
        console.error('Failed to cancel appointment:', response.statusText);
      }
    } catch (error) {
      console.error('Error cancelling appointment:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <ToastContainer />
      {appointmentList.map(appointment => (
        <div key={appointment.appointment_Id} className='flex gap-4 items-center border p-3 m-3 rounded-lg'>
          <Image      src={`/doctors/${appointment.doctor.doctor_Image_Name}`}  width={100} height={100} alt="doctor-image" className='rounded-full h-[70px] w-[70px] object-cover' />
          <div className='flex flex-col gap-2 w-full'>
            <h2 className='font-bold text-[18px] items-center flex justify-between'>
              {appointment.doctor.doctor_Name}
              {appointment.appointment_Date && !expired ? (
                <Button
                  variant='outline'
                  className='text-red-500 border-red-500'
                  onClick={() => handleCancel(appointment.appointment_Id)}
                  disabled={loading}
                >
                  {loading ? 'Cancelling...' : 'Cancel Appointment'}
                </Button>
              ) : null}
            </h2>
            <h2 className='flex gap-2 text-gray-500'><MapPin className='text-blue-500' />{appointment.doctor.doctor_Business_Address}</h2>
            <h2 className='flex gap-2 '><Calendar className='text-blue-500' />Appointment On {appointment.appointment_Date}</h2>
            <h2 className='flex gap-2 '><Clock className='text-blue-500' />At Time: {formatTime(appointment.appointment_Time)}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookingList;
