// utils/auth.js

import Cookies from 'js-cookie';

export const getToken = () => {
  return Cookies.get('token');
};

export const setToken = (token) => {
  Cookies.set('token', token, { expires: 7 }); // Expires in 7 days
};

export const removeToken = () => {
  Cookies.remove('token');
};

export const decodeToken = () => {
  const token = getToken();
  if (!token) return null;
  const payload = token.split('.')[1];
  return JSON.parse(atob(payload));
};

export const getUserRole = () => {
  const decoded = decodeToken();
  return decoded ? decoded.roles[0] : null; // Assuming roles is an array and taking the first role
};
