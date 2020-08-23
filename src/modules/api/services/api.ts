import axios from 'axios';

export const dataLakeApi = axios.create({
  baseURL: 'http://localhost:3002',
});

export const blogApi = axios.create({
  baseURL: 'http://localhost:3001',
});

