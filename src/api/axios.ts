import axios from "axios";
import { environment } from "../environments/environment"; // Đảm bảo đường dẫn đúng

const axiosInstance = axios.create({
  baseURL: environment.apiBaseUrl,
  timeout: 10000,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
