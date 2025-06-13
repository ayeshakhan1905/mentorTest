import axios from "axios";
const isDev = import.meta.env.MODE === "development";

const axiosInstance = axios.create({
  baseURL: isDev
    ? "http://localhost:3000/api"
    : "https://mentortest-3af8.onrender.com/api",
  withCredentials: true,
});

export default axiosInstance;