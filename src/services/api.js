import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // URL de votre backend Rails
});

export const fetchCourses = async () => {
  const response = await api.get('/courses');
  return response.data;
};

export default api;
