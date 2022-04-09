import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 3.5%;
`;

export const WrapperLogin = styled.div`
  display: flex;
  justify-content: center;
  width: 384px;
  background: #fff;
  box-shadow: 4px 8px 4px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
`;

export const Form = styled.form`
  display: flex;
  gap: 30px;
  flex-direction: column;
`;

export const Title = styled.h2`
  color: #000;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  font-family: 'Fredoka', sans-serif;
  text-align: center;
  line-height: 48px;
`;

export const WrapperInput = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
  flex-direction: column;
`;

export const Input = styled.input`
  border: 1px solid #a4a4a4;
  width: 300px;
  height: 64px;
  padding: 20px;
  border-radius: 8px;
  margin: 10px auto;
  transition: all 0.1s linear;
`;

export const Alerta = styled.div`
  color: #c0392b;
  font-size: 14px;
`;

export const EsquecerSenha = styled.span`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-size: 14px;
  line-height: 24px;
  text-decoration: underline;
  color: #00000080;
`;

export const ButtonLogin = styled.button`
  padding: 16px 92px;
  margin: auto;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  width: 256px;
  height: 64px;
  color: #000;

  font-family: 'Inter', sans-serif;

  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 20px;

  &:hover {
    background-color: #cacaca;
  }
`;

export const ContainerCriar = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 20px;
`;

export const TextCadastro = styled.p`
  color: #000;
  font-style: normal;
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-size: 14px;
  line-height: 24px;
`;
export const Cadastro = styled(Link)`
  color: #a4a4a4;
  margin: auto;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-size: 14px;
  line-height: 24px;
`;
