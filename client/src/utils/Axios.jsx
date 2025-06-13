import axios from "axios";
const isDev = import.meta.env.MODE === "development";

const axiosInstance = axios.create({
  baseURL: isDev
    ? "http://localhost:3000/api"
    : "https://mentortest-sgdb.onrender.com/api",
  withCredentials: true,
});

export default axiosInstance;