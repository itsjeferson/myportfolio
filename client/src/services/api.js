import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const submitContactForm = (payload) =>
  api.post('/api/contact', payload).then((res) => res.data);
