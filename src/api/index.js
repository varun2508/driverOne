import axios from 'axios';

const baseURL = 'http://165.22.36.178/api/v1/';

const api = axios.create({
  baseURL,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
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
  },
);

export default api;
