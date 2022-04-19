import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerInicial = styled.main``;

export const ContainerTitulo = styled.div`
  width: 100%;
  background: #ecdbf4;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 45px;
`;

export const WrapperTitulo = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Descricao = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
export const ContainerImagemTitulo = styled.div`
  width: 50%;
  height: 100%;
`;
export const ImagemTitulo = styled.img`
  max-width: 100%;
  height: 100%;
`;

export const TituloHome = styled.h1`
  max-width: 590px;
  font-family: 'Fredoka';
  font-style: normal;
  font-weight: 400;
  font-size: 45px;
  line-height: 52px;
  color: #1d1620;
`;

export const Saude = styled.div`
  background: #ffffff;
  width: 380px;
  border-radius: 30px;
  font-family: 'Fredoka';
  font-style: normal;
  font-weight: 400;
  padding: 0 20px;
  font-size: 45px;
  line-height: 52px;
  color: #d782f8;
`;
export const TextHome = styled.p`
  max-width: 650px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: #000000;
  padding-top: 15px;
`;
export const ButtonTitulo = styled(Link)`
  width: 214px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fcf1f3;
  border: 1px solid #f5a9b8;
  margin: 24px 0;
  box-shadow: 2px 2px 10px 1px rgba(181, 181, 181, 0.33);
  border-radius: 8px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #481F26;
  text-align:center;
  text-decoration:none;
  cursor: pointer; 
 
  
  &:hover {
    background: #F9D7DD;
    }
  }
`;

export const ContainerComoFunciona = styled.div`
  display: flex;
  justify-content: center;
  padding: 45px 0;
  align-items: center;
  width: 100%;
  background: #fff;
`;
export const WrapperComoFunciona = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 90%;
  gap: 45px;
`;

export const ImagemIcone = styled.img`
  width: 80px;
  height: 80px;
`;

export const TituloHome2 = styled.h1`
  width: 473px;
  height: 44px;
  font-family: 'Fredoka';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  color: #1d1620;
  margin: auto;
  text-decoration: underline #ecdbf4;
`;
export const ContainerdeUso = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;

export const PassoaPasso = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 282px;
  gap: 26px;
`;
export const Passos = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.5px;
  color: #000000;
`;
export const TextoPassos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter';
  font-style: normal;
  background: #f5edf8;
  border-radius: 32px;
  width: 282px;
  height: 148px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: #111111;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
export const ButtonnProfissional = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
  width: 303px;
  height: 48px;
  padding:12px ;
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
  text-align:center;
  text-decoration:none;
  color: #481F26;
  cursor: pointer;
 
  
  &:hover {
    background: #F9D7DD;
    text-decoration:underline;
    }
  }
`;

export const ButtonnDonwload = styled.a`
   display: flex;
    align-items: center;
    justify-content: center;
  width: 221px;
  height: 48px;
  padding:12px ;
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
  color: #481F26;
  cursor: pointer;
  text-decoration:none;
 
  
  &:hover {
    background: #F9D7DD;
    text-decoration:underline;
    }
  }
`;
export const Icones = styled.img`
  margin-right: 10px;
`;

export const ContainerCenarioAtual = styled.div`
  width: 100%;
  background: #fefaff;
  display: flex;
  justify-content: center;
  padding-top: 45px;
`;
export const WrapperCenarioAtual = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;
export const ContainerDadosCenario = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TituloHome3 = styled.h1`
  height: 44px;
  font-family: 'Fredoka';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  color: #1d1620;
  text-align: center;
  text-decoration: underline #ecdbf4;
`;

export const DadosInformativos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 30%;
  height: 80%;
  justify-content: space-evenly;
`;

export const Dados = styled.div`
  display: flex;
`;

export const TituloDados = styled.h1`
  font-family: 'Fredoka';
  font-style: normal;
  font-weight: 400;
  font-size: 45px;
  line-height: 52px;
  color: #744d83;
`;
export const TextoDados = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #111111;
`;

export const ContainerAjudaProfissional = styled.div`
  width: 100%;
  height: 644px;
  background: #fefaff;
`;

export const WrapperAjudaProfissional = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;
export const ParaAjudar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const PossoAjudar = styled.div`
  display: flex;
  flex-direction: column;
  width: 520px;
  height: 48px;
`;
export const TextoAjudar = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  padding: 20px;
`;

export const DocPsico = styled.img``;
