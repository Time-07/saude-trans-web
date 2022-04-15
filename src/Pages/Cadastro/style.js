import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContanierTelaCadastro = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 80px;
  height: 100%;
  padding-bottom: 80px;
  overflow: auto;
  width: 100%;
`;

export const ContainerCadastro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 480px;
  width: 612px;
  padding: 20px;
  gap: 20px;
  background: #fff;
  box-shadow: 4px 8px 4px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

export const TitleDoc = styled.h1`
  color: #000;
  font-family: 'Fredoka';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
`;

export const Detalhe = styled.progress`
  -webkit-appearance: none;
  appearance: none;
  width: 405px;
  height: 8px;

  transition: width 2s ease-in-out;

  ::-webkit-progress-bar {
    background-color: #c4c4c4;
    border-radius: 10px;
  }
  ::-webkit-progress-value {
    background: #514d4d;
    border-radius: 10px;
    background-size: 35px 20px, 100% 100%, 100% 100%;
  }
`;

export const Text = styled.p`
  color: #000;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
`;

export const OpcaoCadastro = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const ContainerFormTipoProfissional = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Profissionais = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Opcao = styled.div`
  width: 168px;
  height: 168px;
  border-radius: 50%;
  background: #c4c4c4;
`;

export const TextOpcao = styled.label`
  font-family: 'Fredoka';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  color: #000000;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Medico = styled.label`
  font-family: 'Fredoka';
  font-style: normal;
  font-size: 18px;
  line-height: 40px;
  color: #000000;
`;

export const Psicologo = styled.label`
  font-family: 'Fredoka';
  font-style: normal;
  font-size: 18px;
  line-height: 40px;
  color: #000000;
`;
export const Texto = styled.p`
  color: #000;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  width: 526px;
`;
export const ButtonCadastro = styled.button`
  border-radius: 10px;
  border: none;
  cursor: pointer;
  width: 256px;
  height: 64px;
  color: #000;
  margin-top: 1rem;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;

  &:hover {
    background-color: #cacaca;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const FormCadastro = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 16px;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 16px;
`;

export const Informacoes = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  background: #efefef;
  border-radius: 8px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #000000;
  padding: 10px;
`;

export const TextoFinal = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  color: #000000;
`;
export const TextoInfo = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: #000000;
`;
export const CadastroFinal = styled(Link)`
  color: #a4a4a4;
  margin: auto;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-size: 14px;
  line-height: 24px;
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

export const ButtonFinal = styled(Link)`
  border-radius: 10px;
  color: #000;
  cursor: pointer;
  width: 256px;
  height: 64px;
  margin-top: 1rem;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  background-color: #a4a4a4;
  text-decoration: none;
  &:hover {
    background-color: #cacaca;
  }
`;
