import axios from 'axios';
import * as env from '../../dotEnv';

const api = axios.create({
  baseURL: env.API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})
export default api;
