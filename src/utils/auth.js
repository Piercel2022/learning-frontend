// File: src/utils/auth.js
import Cookies from 'js-cookie';

const TOKEN_KEY = 'jwt_token';

// Save JWT token to cookies
export const setToken = (token) => {
  Cookies.set(TOKEN_KEY, token, { expires: 1 }); // Expires in 1 day
};

// Get JWT token from cookies
export const getToken = () => {
  return Cookies.get(TOKEN_KEY);
};

// Remove JWT token
export const removeToken = () => {
  Cookies.remove(TOKEN_KEY);
};

// Add token to Axios headers
export const setAuthHeader = (axiosInstance) => {
  const token = getToken();
  if (token) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
};