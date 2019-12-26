import axios from 'axios';
import { baseURL } from '../utils/constants';

const api = axios.create({
  baseURL,
  timeout: 1000
  // headers: { 'Content-Type': 'application/json' }
});

api.interceptors.response.use(
  function(response) {
    // Do something with response data
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default api;
