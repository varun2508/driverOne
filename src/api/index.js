import axios from "axios";

const baseURL = "http://52.34.12.148";

const api = axios.create({
  baseURL,
  timeout: 1000,
  headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" }
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
