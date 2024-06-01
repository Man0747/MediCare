"use client";

import { GraduationCap, MapPin } from 'lucide-react';
import Image from 'next/image';

import BookAppointment from './BookAppointment';

function DoctorDetail({doctors}) {
  

  return (
    <>
      {doctors.map((doctor) => (
        <div key={doctor.doctor_Id} className='grid grid-cols-1 md:grid-cols-3 gap-6 border-[1px] p-5 mt-5 rounded-lg'>
          {/* Doctor Image */}
          <div>
            <Image 
              width={200} 
              height={200} 
              className='rounded-lg h-[270px] w-full object-cover' 
              src={`/doctors/${doctor.doctor_Image_Name}`} 
              alt="Doctor's Photo"
            />
          </div>
          {/* DoctorInfo */}
          <div className='col-span-2 mt-5 flex flex-col gap-3 items-baseline'>
            <h2 className='font-bold text-2xl'>{doctor.doctor_Name}</h2>
            <div className="flex flex-wrap gap-2">
              <div className="flex gap-2 items-center text-gray-500 text-md">
                <GraduationCap></GraduationCap>
                <span>{doctor.doctor_Experience} years</span>
              </div>
              <div className="flex gap-2 items-center text-gray-500 text-md">
                <MapPin></MapPin>
                <span>{doctor.doctor_Business_Address}</span>
              </div>
            </div>
            {doctor.speciality && (
              <h2 className='text-[10px] bg-blue-100 p-1 px-2 rounded-full font-bold text-blue-500'>
                {doctor.speciality.speciality_Name}
              </h2>
            )}
           
            <BookAppointment doc_id={doctor.doctor_Id}></BookAppointment>
          </div>
        </div>
      ))}
      {/* AboutDoctor */}
      {/* Assuming each doctor has their own about section */}
      {doctors.map((doctor) => (
        <div key={doctor.doctor_Id} className='p-3 border-[1px] rounded-lg mt-5'>
          <h2 className='font-bold text-[20px]'>About {doctor.doctor_Name}</h2>
          <p className='text-gray-500 mt-2 tracking-wide overflow-hidden overflow-ellipsis max-w-[100%]' style={{ wordWrap: 'break-word' }}>
            {doctor.doctor_About}
          </p>
        </div>
      ))}
    </>
  );
}

export default DoctorDetail;
