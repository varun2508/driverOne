import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});

api.interceptors.response.use(
  (response) => {
    if (response) {
      return response.data;
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
