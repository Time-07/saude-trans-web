import styled from 'styled-components';

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
  width: 100%;
  height: 100%;
`;

export const ContainerCadastro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 592px;
  min-height: 480px;
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
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
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

export const ButtonCadastro = styled.button`
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

export const ContainerCRM = styled.div`
  display: flex;
  background: pink;
`;
export const Informacoes = styled.div`
  width: 527px;
  height: 96px;
  background: #efefef;
  border-radius: 8px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #000000;
`;
