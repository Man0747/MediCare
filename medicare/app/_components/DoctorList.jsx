import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function DoctorList({ doctors,heading='Popular Doctors' }) {
  return (
    <div className='mb-10 flex flex-col items-center gap-4'>
      <h2 className='font-bold text-4xl tracking-wide'>{heading}</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-7 mt-4'>
        {doctors.map((doctor) => (
          <div key={doctor.doctor_Id} className='border-[1px] rounded-lg p-3 cursor-pointer hover:border-blue-600 hover:shadow-sm transition-all ease-in-out'>
            <Image src={`/doctors/${doctor.doctor_Image_Name}`}  alt="doctor" height={200} width={200} className="h-[200px] w-full object-cover rounded-lg" />
            <div className='mt-3 items-baseline flex flex-col gap-1'>
              <h2 className='text-[12px] font-medium bg-blue-100 p-1 rounded-full px-2 text-blue-600'>{doctor.speciality.speciality_Name}</h2>
              <h2 className='font-bold'>{doctor.doctor_Name}</h2>
              <h2 className='text-blue-600 font-medium text-sm'>{doctor.doctor_Experience} Years</h2>
              <h2 className='text-gray-500 text-sm'>{doctor.doctor_Business_Address}</h2>
              <Link href={'/details/'+doctor.doctor_Name} className='p-2 px-3 border-[1px] border-blue-600 rounded-lg text-center text-[11px] mt-2 cursor-pointer hover:bg-blue-600 hover:text-white'>Book Now</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorList;
