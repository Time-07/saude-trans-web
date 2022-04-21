import React from 'react';
import LogoImg from '../../assets/logoo.jpeg';
import Contato from '../../assets/email.svg';
import {
  Logo,
  ContainerFooter,
  Sobre,
  Conta,
  TextFim,
  Fim,
  TituloSobre,
  TextSobre,
  OpcaoConta,
  Icones,
} from './style';

const Footer = ({ height }) => {
  return (
    <>
      <ContainerFooter height={height}>
        <div>
          <Logo src={LogoImg} alt="logoIoasys" />
          <Sobre>
            <TituloSobre>Sobre</TituloSobre>
            <TextSobre>
              DiverSaúde é uma iniciativa criada para conectar pessoas trans a
              profissionais da saúde interessados(as) em oferecer um tratamento
              digno, diminuindo a violência sofrida por essas pessoas.
            </TextSobre>
          </Sobre>
          <Conta>
            <TituloSobre>DiverSaúde</TituloSobre>
            <nav>
              <ul>
                <OpcaoConta to="#">Download do app DiverSaúde</OpcaoConta>{' '}
              </ul>
              <ul>
                <OpcaoConta to="/login">Login para profissionais</OpcaoConta>
              </ul>
              <ul>
                <OpcaoConta to="/cadastro">
                  Cadastro de profissionais
                </OpcaoConta>
              </ul>
            </nav>
          </Conta>
          <Conta>
            <TituloSobre>Fale conosco</TituloSobre>
            <a
              href="mailto:contato@diversaude.com.br"
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '12px',
                lineHeight: '16px',
              }}
            >
              <Icones src={Contato} alt="" />
              contato@diversaude.com.br
            </a>
          </Conta>
        </div>
      </ContainerFooter>
      <Fim>
        <TextFim>DIVERSAÚDE 2022 - Todos os direitos reservados</TextFim>
      </Fim>
    </>
  );
};

export default Footer;
