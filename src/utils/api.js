// File: src/utils/api.js
import axios from 'axios';
import { setAuthHeader } from './auth';

const api = axios.create({
  baseURL: 'http://localhost:3000/api/v1', // Replace with your backend URL
});

setAuthHeader(api); // Attach token to headers if available

export default api;