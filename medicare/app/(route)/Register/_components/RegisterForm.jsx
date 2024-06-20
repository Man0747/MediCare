import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { register } from '../services/authService';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(username, password, role);
            router.push('/login');
        } catch (err) {
            setError('Registration failed');
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label>Role</label>
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="">Select a role</option>
                        <option value="ROLE_PATIENT">Patient</option>
                        <option value="ROLE_DOCTOR">Doctor</option>
                    </select>
                </div>
                <button type="submit">Register</button>
                {error && <div>{error}</div>}
            </form>
        </div>
    );
};

export default RegisterForm;
