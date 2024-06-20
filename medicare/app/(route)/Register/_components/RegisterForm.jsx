// pages/register.js

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { register } from '@/app/Services/AuthService';


const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('ROLE_DOCTOR'); // Default to doctor
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(email, password, role);
      router.push('/Login');
    } catch (error) {
      setError('Failed to register');
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="ROLE_DOCTOR">Doctor</option>
          <option value="ROLE_PATIENT">Patient</option>
        </select>
        <button type="submit">Register</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default RegisterForm;
