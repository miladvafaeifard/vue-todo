import axios from 'axios';

export const HttpService = axios.create({
  baseURL: process.env.VUE_APP_API_URL || 'http://localhost:5000/'
});
