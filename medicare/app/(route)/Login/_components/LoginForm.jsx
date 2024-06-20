// pages/login.js

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getUserRole, setToken } from '@/app/Services/AuthContext';
import { login } from '@/app/Services/AuthService';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      // setToken(data.jwtToken);
      const token = getUserRole();
      console.log(token);
      console.log(data);
      router.push(token === 'ROLE_DOCTOR' ? '/DoctorForm' : '/PatientForm');
    } catch (error) {
      setError('Failed to login');
    }
  };

  return (
    <div>
      <h1>Login</h1>
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
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
