"use client";
import CategorySearch from "./_components/CategorySearch";
import DoctorDataForm from "./_components/DoctorDataForm";
import DoctorList from "./_components/DoctorList";
import Hero from "./_components/Hero";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SignupPage from "./(route)/Login/_components/LoginForm";
import Dashboard from "./(route)/Dashboard/page";

export default function Home() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/doctors');
        setDoctors(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
   <div >
        <Dashboard></Dashboard>
        {/* <Hero></Hero> */}
        {/* <CategorySearch></CategorySearch> */}
        {/* <DoctorList doctors={doctors} />  */}
        {/* <SignupPage></SignupPage> */}
        {/* <DoctorDataForm></DoctorDataForm>*/}

   </div>
  );
}
