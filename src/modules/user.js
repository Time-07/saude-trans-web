import { api } from '../service/api';

export const loginUser = async values => {
  const response = await api.post(`auth/login`, values);
  const { data } = response;
  return data;
};

export const RegisterUser = async values => {
  const response = await api.post(`users`, values);
  const { data } = response;
  return data;
};
