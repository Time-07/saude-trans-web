// import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 104px;
  background: #fff;
  padding: 32px;
`;
export const Contato = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const ImagemPerfil = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 16px;
`;
export const TitleEspecialista = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

  color: #6f6f6f;

  flex-grow: 0;
  margin: 8px 0px;
`;

export const Especialidades = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 24px 8px;
  border: 1px solid #a4a4a4;
  box-sizing: border-box;
  border-radius: 8px;
  width: 100%;

  .container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 50%;
  }

  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  .container input:checked ~ .checkmark {
    background-color: #000;
  }

  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  .container input:checked ~ .checkmark:after {
    display: block;
  }

  .container .checkmark:after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
`;
export const ButtonSalvar = styled.button`
  width: 99px;
  height: 56px;
  background: #f5a9b8;
  border: 1px solid #cf8a97;
  box-sizing: border-box;
  box-shadow: 0px 2px 8px 1px rgba(245, 169, 184, 0.5);
  border-radius: 8px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #000000;
`;
export const TextoAtendimento = styled.h1`
  font-family: 'Fredoka';
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 120%;
  text-align: center;
  color: #000000;
  margin-top: 32px;
`;
export const TextoContato = styled.h1`
  font-family: 'Fredoka';
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 120%;
  text-align: center;
  color: #000000;
  margin-top: 32px;
`;
export const TextArea = styled.textarea`
  width: 528px;
  height: 250px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  border-radius: 8px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #5a5a5a;
`;
