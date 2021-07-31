import axios from 'axios';

const mainApi = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', // todo should be .env variable, but hard coding for now
  headers: { Accept: 'application/json' },
});

export const advertisements_getAll = () => mainApi.get('advertisements');
