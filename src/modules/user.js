import { api, ServicesAPIToken } from '../service/api';

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

export const TipoUsuario = async values => {
  const response = await api.post(`roles`, values);
  const { data } = response;
  return data;
};

export const DadosUsuario = async id => {
  const response = await ServicesAPIToken.get(`users/${id}`);
  return response;
};

export const AtualizarDadosUsuario = async values => {
  const response = await ServicesAPIToken.patch(`users`, values);
  const { data } = response;
  return data;
};
