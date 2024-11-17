// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://contact-mangement-1sse.onrender.com', // Replace with your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
