// src/utils/axios.jsx
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://mentortest-iivj.onrender.com/api', 
  withCredentials: true,             
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // clear user from context if unauthorized
      localStorage.removeItem("user"); // optional
      window.location.href = "/login"; // or show a logout message
    }
    return Promise.reject(error);
  }
);
export default axiosInstance;
