import React, { useState, useEffect } from 'react';
import LogoImg from '../../assets/logoo.jpeg';
import Apresentacao from './Form/Apresentacao';
import Atendimento from './Form/Atendimento';
import Contato from './Form/Contato';
import Profissional from './Form/Profissional';
import Footer from '../../components/Footer';
import ModalAviso from '../../components/ModalAviso';
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
  MenuItemHome,
  DescricaoStatus,
  TituloStatus,
  ContainerStatus,
} from './style';
import DocPsicoo from '../../assets/docpsico.png';
import { DadosUsuario } from '../../modules/user';

function Perfil() {
  const { user, setUser, userLogout, loading, setLoading, step, setStep } =
    useUserData();
  const [statusCode, setStatusCode] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getDadosUsuario() {
      try {
        const local = JSON.parse(localStorage.getItem('user-data'));
        const response = await DadosUsuario(local.userId);

        setUser(state => ({ ...state, ...response.data }));
        setStatusCode(response.status);
      } catch (error) {
        console.log('error', error);
      } finally {
        setLoading(false);
      }
    }
    getDadosUsuario();
  }, []);

  if (statusCode === 200)
    return (
      <Conatiner>
        <ContainerPerfil>
          <Logo src={LogoImg} alt="logoIoasys" />
          <ContainerMenuPerfil>
            <MenuItemHome to="/">Home</MenuItemHome>
            <MenuItem>Perfil</MenuItem>
            <MenuItem>Informe-se</MenuItem>
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
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
            >
              <PerfilLeft>
                <TextPerfil>Perfil</TextPerfil>

                <MenuButtons>
                  <ButtonPublicar
                    active={step === 0}
                    onClick={() => setStep(0)}
                  >
                    Profissional
                  </ButtonPublicar>
                  <ButtonPublicar
                    active={step === 1}
                    onClick={() => setStep(1)}
                  >
                    Atendimento
                  </ButtonPublicar>
                  <ButtonPublicar
                    active={step === 2}
                    onClick={() => setStep(2)}
                  >
                    Contato
                  </ButtonPublicar>
                  <ButtonPublicar
                    active={step === 3}
                    onClick={() => setStep(3)}
                  >
                    Apresentação
                  </ButtonPublicar>
                  <ButtonAtivar>Ativar publicação</ButtonAtivar>
                </MenuButtons>
              </PerfilLeft>
              <ContainerStatus>
                <DescricaoStatus>No momento, o perfil está:</DescricaoStatus>
                <TituloStatus>Ativo</TituloStatus>
                <DescricaoStatus>
                  Para ativar o perfil é necessário que os campos obrigatórios
                  indicados acima em cada categoria estejam preenchidos.
                  Exemplo: “Atendimento 4/4”.
                </DescricaoStatus>
              </ContainerStatus>
            </div>

            <PerfilRight>
              {step === 0 && <Profissional />}
              {step === 1 && <Atendimento />}
              {step === 2 && <Contato />}
              {step === 3 && <Apresentacao />}
            </PerfilRight>
          </PerfilProfissinal>
        </Wrapper>
        <Footer />
      </Conatiner>
    );
  return null;
}

export default Perfil;
