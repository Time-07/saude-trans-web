import axios from 'axios';

const api = axios.create({
  baseURL: 'https://camp-api-docker-v3.herokuapp.com/api/v1/',
});

export { api };
