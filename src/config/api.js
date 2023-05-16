
import axios from 'axios';

export const API_BASE_URL = 'http://localhost:5454';

const api = axios.create({
  baseURL: API_BASE_URL,
});

const token = localStorage.getItem('jwt');
if (token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;
