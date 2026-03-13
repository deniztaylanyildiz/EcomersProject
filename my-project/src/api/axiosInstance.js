import axios from 'axios';

// Başına 'export' ekleyerek isimlendirilmiş export yapıyoruz
export const axiosInstance = axios.create({
  baseURL: 'https://workintech-fe-ecommerce.onrender.com',
});