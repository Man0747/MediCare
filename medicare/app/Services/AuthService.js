// services/auth.js

import axios from 'axios';
import { removeToken, setToken, decodeToken } from './AuthContext';

const API_URL = 'http://localhost:8080/auth';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    const token = response.data.jwtToken;
    setToken(token);
    return response.data;
  } catch (error) {
    throw new Error('Invalid credentials');
  }
};

export const register = async (email, password, role) => {
  try {
    const response = await axios.post(`${API_URL}/create-user`, {
      user_Email: email,
      user_Password: password,
      user_Role: role,
    });
    return response.data;
  } catch (error) {
    throw new Error('Registration failed');
  }
};

export const logout = () => {
  removeToken();
};
