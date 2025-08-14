import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // Backend URL
  withCredentials: true, // Allow cookies if you add them later
});

export default api;
