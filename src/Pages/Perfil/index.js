import React, { useState } from 'react';
import LogoImg from '../../assets/logoo.jpeg';
import Apresentacao from './Form/Apresentacao';
import Atendimento from './Form/Atendimento';
import Contato from './Form/Contato';
import Profissional from './Form/Profissional';
import {
  ContainerPerfil,
  Logo,
  Conatiner,
  ContainerMenuPerfil,
  MenuItem,
  Wrapper,
  InicioPerfil,
  TextoPerfil,
  TextoInformativo,
  PerfilProfissinal,
  PerfilLeft,
  PerfilRight,
  TextoContatoInfo,
  ButtonPublicar,
  TextPerfil,
  MenuButtons,
} from './style';

function Perfil() {
  const [active, setActive] = useState(0);

  return (
    <Conatiner>
      <ContainerPerfil>
        <Logo src={LogoImg} alt="logoIoasys" />
        <ContainerMenuPerfil>
          <MenuItem>Perfil</MenuItem>
          <MenuItem>Avaliações</MenuItem>
          <MenuItem>Sair</MenuItem>
        </ContainerMenuPerfil>
      </ContainerPerfil>

      <Wrapper>
        <InicioPerfil>
          <TextoPerfil>Perfil profissional</TextoPerfil>
          <TextoInformativo>
            Preencha os campos abaixo para completar o seu perfil e
            disponibilizá-lo no nosso app. É por meio dessas informações que os
            pacientes poderão entrar em contato.
          </TextoInformativo>
        </InicioPerfil>

        <PerfilProfissinal>
          <PerfilLeft>
            <TextPerfil>Perfil</TextPerfil>

            <MenuButtons>
              <ButtonPublicar
                active={active === 0}
                onClick={() => setActive(0)}
              >
                Profissional
              </ButtonPublicar>
              <ButtonPublicar
                active={active === 1}
                onClick={() => setActive(1)}
              >
                Atendimento
              </ButtonPublicar>
              <ButtonPublicar
                active={active === 2}
                onClick={() => setActive(2)}
              >
                Contato
              </ButtonPublicar>
              <ButtonPublicar
                active={active === 3}
                onClick={() => setActive(3)}
              >
                Apresentação
              </ButtonPublicar>
            </MenuButtons>
          </PerfilLeft>
          <PerfilRight>
            <TextoContatoInfo>Informações do(a) contato</TextoContatoInfo>

            {active === 0 && <Profissional />}
            {active === 1 && <Atendimento />}
            {active === 2 && <Contato />}
            {active === 3 && <Apresentacao />}
          </PerfilRight>
        </PerfilProfissinal>
      </Wrapper>
    </Conatiner>
  );
}

export default Perfil;
