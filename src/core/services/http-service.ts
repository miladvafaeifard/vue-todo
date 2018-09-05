import axios from 'axios';

export const HttpService = axios.create({
  baseURL: `http://localhost:${process.env.PORT || 8080}`
});
