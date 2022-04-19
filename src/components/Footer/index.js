import React from 'react';
import LogoImg from '../../assets/logoo.jpeg';
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
} from './style';

const Footer = () => {
  return (
    <>
      <ContainerFooter>
        <Logo src={LogoImg} alt="logoIoasys" />
        <Sobre>
          <TituloSobre>Sobre</TituloSobre>
          <TextSobre>
            DiverSaúde é uma iniciativa sem fins lucrativos criada para unir
            pessoas trasns em busca de atendimento médico e psicológico a
            profissionais aliados(as) e preparados(as) para tratar (bem) esse
            público.
          </TextSobre>

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
            Fale conosco:contato@diversaude.com.br
          </a>
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
              <OpcaoConta to="/cadastro">Cadastro de profissionais</OpcaoConta>
            </ul>
          </nav>
        </Conta>
      </ContainerFooter>
      <Fim>
        <TextFim>DIVERSAÚDE 2022 - Todos os direitos reservados</TextFim>
      </Fim>
    </>
  );
};

export default Footer;
