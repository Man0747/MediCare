"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Input } from '@material-tailwind/react';

function SignUpForm() {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    console.log(formData);
  };

  return (
    <div>
      <main className="w-full h-screen flex flex-col items-center justify-center sm:px-4">
        <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
          <div className="text-center">
            <img src="/MediCareLogoRound.png" width={150} className="mx-auto" alt="Logo" />
            <div className="mt-5 space-y-2">
              <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Create an account</h3>
              <p className="">Already have an account? <Link href="/Login" className="font-medium text-indigo-600 hover:text-indigo-500">Log in</Link></p>
            </div>
          </div>
          <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <Input
                  label='Name'
                  type="text"
                  color="lightBlue"
                  size="regular"
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  
                />
              </div>
              <div>
                <Input
                  label='Email'
                  type="email"
                  color="lightBlue"
                  size="regular"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                 
                />
              </div>
              <div>
                <Input
                  label='Password'
                  type="password"
                  color="lightBlue"
                  size="regular"
                  required
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
              >
                Create account
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SignUpForm;
