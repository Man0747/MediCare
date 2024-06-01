"use client";
import React, { useState } from 'react';
import axios from 'axios';
import { Input } from '@material-tailwind/react';
import { ArrowRightCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

function DoctorDataForm() {
  const [formData, setFormData] = useState({
    docName: '',
    docEmail: '',
    docBusinessAddress: '',
    docPhone: '',
    docClinicName: '',
    docGeneralPracticeArea: '',
    docSpecialityArea: '',
    docCertifications: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const { docName, docEmail, docBusinessAddress, docPhone, docClinicName, docGeneralPracticeArea, docSpecialityArea, docCertifications } = formData;

    const queryString = `?docName=${encodeURIComponent(docName)}&docEmail=${encodeURIComponent(docEmail)}&docBusinessAddress=${encodeURIComponent(docBusinessAddress)}&docPhone=${encodeURIComponent(docPhone)}&docClinicName=${encodeURIComponent(docClinicName)}&docGeneralPracticeArea=${encodeURIComponent(docGeneralPracticeArea)}&docSpecialityArea=${encodeURIComponent(docSpecialityArea)}&docCertifications=${encodeURIComponent(docCertifications)}`;

    axios.post(`http://localhost:8080/doctors/add${queryString}`)
      .then(response => {
        console.log('Doctor data submitted successfully:', response.data);
        // Handle success
      })
      .catch(error => {
        console.error('Error submitting doctor data:', error);
        // Handle error
      });
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">Enter Details</h2>
      <div className="mb-4">
        <Input type="text" name="docName" label="Name" placeholder="Enter name" onChange={handleChange} />
      </div>
      <div className="mb-4">
        <Input type="text" name="docBusinessAddress" label="Business Address" placeholder="Enter business address" onChange={handleChange} />
      </div>
      <div className="mb-4">
        <Input type="tel" name="docPhone" label="Phone" placeholder="Enter phone number" onChange={handleChange} />
      </div>
      <div className="mb-4">
        <Input type="email" name="docEmail" label="Email" placeholder="Enter email address" onChange={handleChange} />
      </div>
      <div className="mb-4">
        <Input type="text" name="docClinicName" label="Clinic Name" placeholder="Enter clinic name" onChange={handleChange} />
      </div>
      <div className="mb-4">
        <Input type="text" name="docGeneralPracticeArea" label="General Practice Area" placeholder="Enter general practice area" onChange={handleChange} />
      </div>
      <div className="mb-4">
        <Input type="text" name="docSpecialityArea" label="Speciality Area" placeholder="Enter speciality area" onChange={handleChange} />
      </div>
      <div className="mb-8">
        <Input type="text" name="docCertifications" label="Certifications" placeholder="Enter certifications" onChange={handleChange} />
      </div>
      <div className="flex justify-center">
        <Button className='bg-blue-900 gap-2' onClick={handleSubmit}>SUBMIT<ArrowRightCircle size={20} /></Button>
      </div>
    </div>
  );
}

export default DoctorDataForm;
