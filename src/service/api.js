import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const api = axios.create({
  baseURL: ' https://diversaude-api.herokuapp.com/api/v1/',
});

const ServicesAPIToken = axios.create({
  baseURL: ' https://diversaude-api.herokuapp.com/api/v1/',
});

ServicesAPIToken.interceptors.request.use(
  config => {
    const token = cookies.get('user-data-token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  err => {
    Promise.reject(err);
  },
);

export { api, ServicesAPIToken };
