import axios from 'axios';
import * as env from '../../dotEnv';

export const api = async ({ method, url, apiData, headers }) => {
  const responseApi = axios.create({
    baseURL: env.API_URL,
    method,
    url,
    data: apiData,
    headers,
  })
  return responseApi
}

export default api;
