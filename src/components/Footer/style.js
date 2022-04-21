import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Logo = styled.img`
  width: 169px;
  height: 104px;
`;
export const ContainerFooter = styled.footer`
  background: #744d83;
  display: flex;
  width: 100%;
  height: 384px;
  align-items: flex-end;
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding-bottom: 16px;
  }
`;
export const Sobre = styled.div`
  width: 282px;
`;
export const Conta = styled.div`
  width: 282px;
`;
export const TituloSobre = styled.h1`
  font-family: 'Fredoka';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;
  padding-bottom: 20px;
`;

export const TextSobre = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: #ffffff;
  padding-top: 10px;
  padding-bottom: 20px;
`;

export const OpcaoConta = styled(Link)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: #ffffff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Fim = styled.div`
  height: 40px;
  width: 100%;
  background: #44314b;
`;
export const TextFim = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.5px;
  color: #d9d9d9;
  text-align: center;
  padding-top: 10px;
`;
