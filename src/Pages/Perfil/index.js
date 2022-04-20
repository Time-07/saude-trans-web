import React, { useState } from 'react';
import LogoImg from '../../assets/logoo.jpeg';
import Apresentacao from './Form/Apresentacao';
import Atendimento from './Form/Atendimento';
import Contato from './Form/Contato';
import Profissional from './Form/Profissional';
import Footer from '../../components/Footer';
import { useUserData } from '../../context/useUserData';
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
  ButtonPublicar,
  TextPerfil,
  MenuButtons,
  ButtonAtivar,
  DocPsico,
} from './style';
import DocPsicoo from '../../assets/docpsico.png';

function Perfil() {
  const { userLogout } = useUserData();
  const [active, setActive] = useState(0);

  return (
    <Conatiner>
      <ContainerPerfil>
        <Logo src={LogoImg} alt="logoIoasys" />
        <ContainerMenuPerfil>
          <MenuItem>Perfil</MenuItem>
          <MenuItem>Avaliações</MenuItem>
          <MenuItem onClick={() => userLogout()}>Sair</MenuItem>
        </ContainerMenuPerfil>
      </ContainerPerfil>

      <Wrapper>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '120px',
          }}
        >
          <InicioPerfil>
            <TextoPerfil>Perfil profissional</TextoPerfil>
            <TextoInformativo>
              Preencha os campos abaixo para completar o seu perfil e
              disponibilizá-lo no DIVERSAÚDE.
            </TextoInformativo>
          </InicioPerfil>
          <DocPsico src={DocPsicoo} />
        </div>

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
              <ButtonAtivar>Ativar publicação</ButtonAtivar>
            </MenuButtons>
          </PerfilLeft>

          <PerfilRight>
            {active === 0 && <Profissional />}
            {active === 1 && <Atendimento />}
            {active === 2 && <Contato />}
            {active === 3 && <Apresentacao />}
          </PerfilRight>
        </PerfilProfissinal>
      </Wrapper>
      <Footer />
    </Conatiner>
  );
}

export default Perfil;
