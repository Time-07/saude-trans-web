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
  flex-direction: row;
  padding-top: 80px;
  height: 100%;
  gap: 20px;
  padding-bottom: 80px;
  width: 100%;
  background: #f5edf8; ;
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
  border: 1px solid rgba(219, 152, 245, 0.33);
  box-sizing: border-box;
  box-shadow: 2px 2px 10px 1px rgba(181, 181, 181, 0.33);
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
  color: #44314b;
  font-family: 'Fredoka';
  font-family: 'Fredoka';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
`;

export const Detalhe = styled.progress`
  -webkit-appearance: none;
  appearance: none;
  width: 405px;
  height: 8px;

  transition: width 2s ease-in-out;

  ::-webkit-progress-bar {
    background-color: #ecdbf4;
    border-radius: 10px;
  }
  ::-webkit-progress-value {
    background: #a768c0;
    border-radius: 10px;
    background-size: 35px 20px, 100% 100%, 100% 100%;
  }
`;

export const Text = styled.p`
  color: #111111;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
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
  box-shadow: 0px 4px 12px rgba(215, 130, 248, 0.33);
`;

export const TextOpcao = styled.label`
  font-family: 'Fredoka';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  color: #744d83;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Medico = styled.img``;

export const Psicologo = styled.img``;
export const Texto = styled.p`
  color: #111111;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
`;
export const ButtonCadastro = styled.button`
  width: 128px;
  height: 56px;
  padding: 16px 24px;
  margin: auto;
  border-radius: 8px;
  cursor: pointer;
  color: #000;
  background: #fcf1f3;
  border: 1px solid #f5a9b8;
  box-sizing: border-box;
  box-shadow: 2px 2px 10px 1px rgba(181, 181, 181, 0.33);
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
 
  &:hover {
    background: #F9D7DD;
    }
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
  width: 528px;
  height: 400px;
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  background: #ecdbf4;
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
  font-family: 'Fredoka';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  color: #000000;
`;
export const TextoInfo = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #000000;
  padding: 0 32px;
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
    background: white;
  }
`;

export const ButtonFinal = styled.button`
  width: 165px;
  height: 56px;
  padding: 16px 24px;
  margin: auto;
  border-radius: 8px;
  cursor: pointer;
  color: #000;
  background: #fcf1f3;
  border: 1px solid #f5a9b8;
  box-sizing: border-box;
  box-shadow: 2px 2px 10px 1px rgba(181, 181, 181, 0.33);
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
 
  &:hover {
    background: #F9D7DD;
    }
  }
`;
export const IconErro = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 5px;
`;
