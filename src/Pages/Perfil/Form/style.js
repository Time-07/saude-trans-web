// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Upload from '../../../assets/avatar.png';

export const FormApresentacao = styled.form`
  width: 100%;
  background: #fff;
  padding: 32px;
  border-radius: 16px;
`;

export const FormProfissionais = styled.form`
  width: 100%;
  background: #fff;
  padding: 32px;
  border-radius: 16px;
`;

export const FormAtendimento = styled.form`
  width: 100%;
  background: #fff;
  padding: 0px 32px;
  border-radius: 16px;
`;
export const FormContato = styled.form`
  width: 100%;
  background: #fff;
  padding: 32px;
  border-radius: 16px;
`;

export const Contato = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 16px;
`;
export const ContainerTextArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 5px;
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

export const Card = styled.div`
  @keyframes open {
    0% {
      background-position: 166% -25%, 220% -69%;
    }
    100% {
      background-position: 120% -5%, 200% -40%;
    }
  }

  input[type='file'] {
    display: none;
  }

  .img-wrap {
    position: relative;
    cursor: pointer;
    width: 120px;
    height: 120px;
    overflow: hidden;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fae5e9;
    border: 1px solid #e5c7f2;
    box-shadow: 0px 2px 6px rgba(215, 130, 248, 0.33);
  }
  .img-upload:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    background-repeat: no-repeat;
    background-position: center;
    width: 120px;
    height: 120px;
    background-image: url(${Upload});
    border-radius: 50%;
    opacity: 0;
    transition: 0.5s ease;
    background: #fae5e9;
  }
  .img-upload:hover:before {
    opacity: 1;
  }
  img {
    max-width: 100%;
  }

  label {
    text-transform: uppercase;
    font-weight: 700;
    color: #676767;
  }

  .status {
    text-align: center;
    max-width: 220px;
    overflow-wrap: break-word;
  }
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

    &:hover {
      color: #744d83;
    }
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
    background-color: #744d83;
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
    background: #fff;
  }
`;

export const ButtonSalvar = styled.button`
  width: 195px;
  height: 56px;
  cursor: pointer;
  background: #fcf1f3;
  border: 1px solid #f5a9b8;
  box-sizing: border-box;
  box-shadow: 2px 2px 10px 1px rgba(181, 181, 181, 0.33);
  border-radius: 8px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  &:hover {
    background: #F9D7DD;
    }
  }
`;

export const TextoAtendimento = styled.h1`
  font-family: 'Fredoka';
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 120%;
  text-align: center;
  color: #000000;
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
  width: 100%;
  height: 250px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  border-radius: 8px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  padding: 16px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #5a5a5a;
`;
