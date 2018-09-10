import axios from 'axios';

export const HttpService = axios.create({
  baseURL: `http://localhost:${process.env.SERVER_PORT || 8080}`
});
