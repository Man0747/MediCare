"use client";

import DoctorList from '@/app/_components/DoctorList';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Search({params}) {
  
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/doctors/speciality/name/${params.cname}`);
        setDoctors(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    console.log("name",params.cname);
    fetchData();
  }, [params.cname]); // Make sure to include params.cname in the dependency array

  return (
    <>
      <div className='col-span-3'>
        <DoctorList doctors={doctors} heading={params.cname} />
      </div>
    </>
  )
}

export default Search;
