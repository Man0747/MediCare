"use client";
import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Calendar } from "@/components/ui/calendar";
import { CalendarDays, Clock } from 'lucide-react';
import { DialogClose } from '@radix-ui/react-dialog';
import { DialogFooter } from '@material-tailwind/react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BookAppointment({doc_id}) {
  const [date, setDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState();

  useEffect(() => {
    getTime();
  }, []);

  const getTime = () => {
    const Timelist = [];
    for (let i = 10; i <= 12; i++) {
      Timelist.push({ time: i + ":00AM" });
      Timelist.push({ time: i + ":30AM" });
    }
    for (let i = 1; i <= 6; i++) {
      Timelist.push({ time: "0" + i + ":00AM" });
      Timelist.push({ time: "0" + i + ":30AM" });
    }
    setTimeSlot(Timelist);
  };

  const isPastDay = (day) => {
    return day <= new Date();
  };

  const handleSubmit = () => {
    // Decoding and formatting the selected time slot
    let formattedTimeSlot = decodeURIComponent(selectedTimeSlot);
    console.log(formattedTimeSlot);
    // formattedTimeSlot = formattedTimeSlot.replace("%3A", ":"); // Replace "%3A" with ":"
    formattedTimeSlot = formattedTimeSlot.replace("AM", ""); // Remove "+AM" if present
    console.log(formattedTimeSlot);
    
    // Build query parameters
    const queryParams = new URLSearchParams();
    queryParams.append('appointmentDate', date.toISOString().split('T')[0]);
    queryParams.append('appointmentTime', formattedTimeSlot);
    queryParams.append('appointmentFee', 50); // Example value, update with the actual fee
    queryParams.append('appointmentNotes', 'Follow-up'); // Example value, update with the actual notes
    queryParams.append('doctorId',doc_id); // Example value, update with the actual doctorId
    queryParams.append('patientId', 1); // Example value, update with the actual patientId
  
    // Construct the full URL
    const fullURL = `http://localhost:8080/appointments/save?${queryParams.toString()}`;
  
    // Log the URL
    console.log('URL:', fullURL);
  
    // Make GET request using Axios
    axios.post(fullURL)
      .then(response => {
        // Handle response data if needed
        console.log('Response:', response.data);
        toast.success('Booking Confirmed');
      })
      .catch(error => {
        // Handle errors
        console.error('Error:', error);
      });
  };
  
  

  return (
    <div>
      <ToastContainer />
      <Dialog>
        <DialogTrigger>
          <Button className="mt-3 rounded-full bg-blue-500">Book Appointment</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Book Appointment</DialogTitle>
            <DialogDescription>
              <div className='grid grid-cols-1 md:grid-cols-2'>
                {/* Calendar */}
                <div className='flex flex-col gap-3 items items-baseline'>
                  <h2 className='flex gap-2 items-center'>
                    <CalendarDays className='text-blue-500 h-5 w-5' />
                    Select Date
                  </h2>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={isPastDay}
                    className="rounded-md border"
                  />
                </div>
                {/* TimeSlot */}
                <div className='mt-3 md:mt-0'>
                  <h2 className='flex gap-2 items center mb-5'><Clock className='text-blue-500 h-5 w-5'></Clock>Select Time Slot</h2>
                  <div className='grid grid-cols-3 gap-2 border-[1px] rounded-lg p-5'>
                    {timeSlot.length > 0 &&
                      timeSlot?.map((item, index) => (
                        <h2 onClick={() => setSelectedTimeSlot(item.time)} className={`'text-center hover:bg-blue-500 hover:text-white  p-2 border rounded-full ${item.time == selectedTimeSlot && 'text-white bg-blue-500 '}'`} key={index}>{item.time}</h2>
                      ))}
                  </div>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className='sm:justify-end '>
            <DialogClose aschild>
              <Button className='text-red-500 border-red-500 mr-4' type='button' variant='outline'>
                Close
              </Button>
              <Button className='bg-blue-500' type='button' disabled={!date || !selectedTimeSlot} onClick={handleSubmit}>
                Submit
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default BookAppointment;
