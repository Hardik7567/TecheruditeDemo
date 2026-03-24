import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://dummyjson.com/',
  //   baseURL: 'http://3.7.81.243/projects/plie-api/public/api/',

  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
