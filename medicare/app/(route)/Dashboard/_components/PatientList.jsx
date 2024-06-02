// src/components/PatientList.js
import React from 'react';
import { FaPhone } from 'react-icons/fa';


const PatientList = ({ date }) => {
    const appointments = {
        '2024-06-03': [
          { time: '09:00', patient: 'Shawn Hampton', type: 'Emergency appointment', phone: true },
          { time: '09:30', patient: 'Polly Paul', type: 'USG + Consultation', cost: 80, phone: true },
          { time: '10:30', patient: 'Jessie Paul', type: 'Laboratory screening', cost: 25, phone: true },
          { time: '11:30', patient: 'Mabel Perkins', type: 'Keeping pregnant', phone: true },
        ],}
  const appointmentList = appointments[date] || [];

  return (
    <div className="max-w-lg mx-auto mt-4 p-5 bg-gray-700 rounded-lg">
      {appointmentList.length === 0 ? (
        <p className="text-white">No appointments for this date.</p>
      ) : (
        appointmentList.map((appointment, index) => (
          <div key={index} className="flex justify-between items-center p-2 bg-gray-600 rounded mb-2">
            <div>
              <p className="text-white font-bold">{appointment.patient}</p>
              <p className="text-gray-300">{appointment.type}</p>
            </div>
            <div className="text-right">
              <p className="text-white">{appointment.time}</p>
              {appointment.cost && <p className="text-gray-300">€ {appointment.cost}</p>}
            </div>
            {appointment.phone && <FaPhone className="text-white ml-2" />}
          </div>
        ))
      )}
    </div>
  );
};

export default PatientList;
