import axios from 'axios';

export const HttpService = axios.create({
  baseURL: `http://localhost:3000/`
});
