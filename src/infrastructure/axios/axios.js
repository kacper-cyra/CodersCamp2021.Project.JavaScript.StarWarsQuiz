import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.SW_API_BASE_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
