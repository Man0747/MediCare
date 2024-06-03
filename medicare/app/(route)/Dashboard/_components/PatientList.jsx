"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaPhone } from 'react-icons/fa';

const PatientList = ({ date }) => {
  const [appointments, setAppointments] = useState([]);
  const docId = 1;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/appointments/doctor/${docId}/date/${date}`);
        setAppointments(response.data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchData();
  }, [date]);

  function formatTime(timeString) {
    const date = new Date(timeString);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  return (
    <div className="max-w-lg mx-auto mt-4 p-5 bg-gray-700 rounded-lg">
      {appointments.length === 0 ? (
        <p className="text-white">No appointments for this date.</p>
      ) : (
        appointments.map((appointment, index) => (
          <div key={index} className="flex justify-between items-center p-2 bg-gray-600 rounded mb-2">
            <div>
              <p className="text-white font-bold">{appointment.patient.patient_Name}</p>
              <p className="text-gray-300">{appointment.appointment_Notes}</p>
            </div>
            <div className="text-right">
              <p className="text-white">{formatTime(appointment.appointment_Time)}</p>
              <p className="text-gray-300">€ {appointment.appointment_Fee}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default PatientList;
