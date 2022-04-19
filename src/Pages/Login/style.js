import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 3.5%;
  padding-bottom: 3.5%;
`;

export const WrapperLogin = styled.div`
  display: flex;
  justify-content: center;
  width: 384px;
  height: 468px;
  background: #fff;
  border: 1px solid rgba(219, 152, 245, 0.33);
  box-shadow: 2px 2px 10px 1px rgba(181, 181, 181, 0.33);
  border-radius: 16px;
`;

export const Form = styled.form`
  display: flex;
  gap: 32px;
  width: 90%;
  flex-direction: column;
`;

export const Title = styled.h2`
  color: #44314b;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  font-family: 'Fredoka', sans-serif;
  text-align: center;
  line-height: 44px;
  padding-top: 32px;
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

export const Alerta = styled.p`
  color: #c0392b;
  font-size: 14px;
`;

export const ButtonLogin = styled.button`
  width: 97px;
  height: 56px;
  margin: auto;
  border-radius: 8px;
  cursor: pointer;
  background: #fcf1f3;
  border: 1px solid #f5a9b8;
  box-sizing: border-box;
  box-shadow: 2px 2px 10px 1px rgba(181, 181, 181, 0.33);
  color: #481f26;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  
  &:hover {
    background: #F9D7DD;
    }
  }
`;

export const ContainerCriar = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
`;

export const TextCadastro = styled.p`
  color: #000;
  font-style: normal;
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-size: 14px;
  line-height: 24px;
  padding-top: 32px;
`;
export const Cadastro = styled(Link)`
  color: #38829f;
  margin: auto;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;
`;
