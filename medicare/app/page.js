"use client";
// import CategorySearch from "./_components/CategorySearch";
// import DoctorList from "./_components/DoctorList";
// import Hero from "./_components/Hero";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import SignupPage from "./(route)/Login/_components/LoginForm";
// import Dashboard from "./(route)/Dashboard/page";
// import DoctorDataForm from "./(route)/DoctorForm/_components/DoctorDataForm";
// import PatientDataForm from "./(route)/PatientForm/_components/PatientDataForm";
import Appointment from "./(route)/Appointment/page";

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
        {/* <Dashboard></Dashboard> */}
        {/* <Hero></Hero> */}
        {/* <CategorySearch></CategorySearch> */}
        {/* <DoctorList doctors={doctors} />  */}
        {/* <SignupPage></SignupPage> */}
        {/* <DoctorDataForm></DoctorDataForm> */}
        {/* <PatientDataForm></PatientDataForm> */}
        {/* <Appointment></Appointment> */}
        {/* <WorkingHoursForm></WorkingHoursForm> */}
   </div>
  );
}
