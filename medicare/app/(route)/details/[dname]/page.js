"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import DoctorDetail from '../_components/DoctorDetail'

function Details({params})
 {
  const [doctorData, setDoctorData] = useState([]);

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/doctors/name/${params.dname}`);
        setDoctorData(response.data);
        console.log("data",response.data);
      } catch (error) {
        console.error('Error fetching doctor data:', error);
      }
    };

    fetchDoctorData();
  }, [params.dname]);
  return (
    <div className='p-5 md:px-20'>
        <h2 className='font-bold text-[22px]'>Details</h2>
        <div className='grid grid-cols-1 lg:grid-cols-4'>
            <div className='col-span-3'>
            <DoctorDetail doctors={doctorData}></DoctorDetail>
            </div>
            {/* DoctorSuggestions */}
            <div>

            </div>
        </div>
    </div>
  )
}

export default Details
