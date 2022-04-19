import { Container } from '@mui/material';
import React from 'react';
import Header from '../../components/Header/';
import Footer from '../../components/Footer';
import Donwload from '../../assets/donwload.png';
import Cadastro from '../../assets/cadastro.png';
import IconTeste from '../../assets/iconTeste.png';
import {
  ContainerInicial,
  ContainerTitulo,
  Saude,
  ButtonTitulo,
  Descricao,
  ImagemTitulo,
  ImagemIcone,
  ContainerComoFunciona,
  ContainerdeUso,
  ContainerImagemTitulo,
  PassoaPasso,
  ContainerButton,
  WrapperComoFunciona,
  ButtonnDonwload,
  ButtonnProfissional,
  Icones,
  TextoPassos,
  ContainerCenarioAtual,
  TituloHome3,
  DadosInformativos,
  Dados,
  TituloDados,
  TextoDados,
  ContainerAjudaProfissional,
  ParaAjudar,
  PossoAjudar,
  TextoAjudar,
  TituloHome,
  TextHome,
  TituloHome2,
  DocPsico,
  WrapperTitulo,
  WrapperCenarioAtual,
  WrapperAjudaProfissional,
  ContainerDadosCenario,
} from './style.js';
import DocPsicoo from '../../assets/home3.png';
import Profissionais from '../../assets/Homepage 4.png';
import ImagemHome from '../../assets/Homepage 1.png';

function PageHome() {
  return (
    <>
      <Header />

      <ContainerInicial>
        <ContainerTitulo>
          <WrapperTitulo>
            <Descricao>
              <TituloHome>
                Respeito é um direito de todos, todas e todes.
              </TituloHome>

              <Saude> Saúde, também.</Saude>

              <TextHome>
                Já imaginou deixar de buscar atendimento médico ou psicológico
                por <strong> medo de sofrer discriminação? </strong> Essa é a
                realidade atual de pessoas trans no Brasil todo.
              </TextHome>
              <TextHome>
                Se você é ginecologista, psicólogo(a), endócrino, urologista ou
                psiquiatra você pode nos ajudar a mudar esse cenário hoje mesmo.
              </TextHome>
              <ButtonTitulo to="/cadastro">Quero me cadastrar!</ButtonTitulo>
            </Descricao>
            <ContainerImagemTitulo>
              <ImagemTitulo src={ImagemHome} alt />
            </ContainerImagemTitulo>
          </WrapperTitulo>
        </ContainerTitulo>
        <ContainerComoFunciona>
          <WrapperComoFunciona>
            <TituloHome2>Como funciona o DiverSaúde</TituloHome2>
            <ContainerdeUso>
              <PassoaPasso>
                <ImagemIcone src={IconTeste} alt />
                <TextoPassos>
                  <span style={{ width: '80%' }}>
                    <strong>1.</strong> O profissional de saúde se cadastra na
                    plataforma, oferecendo seu serviço e assumindo o compromisso
                    de respeito com pacientes trans.
                  </span>
                </TextoPassos>
              </PassoaPasso>
              <PassoaPasso>
                <ImagemIcone src={IconTeste} alt />
                <TextoPassos>
                  <span style={{ width: '80%' }}>
                    <strong>2.</strong> A pessoa trans se cadastra no nosso app,
                    onde exibimos os profissionais disponíveis além de
                    informações de cuidado à saúde.
                  </span>
                </TextoPassos>
              </PassoaPasso>
              <PassoaPasso>
                <ImagemIcone src={IconTeste} alt />
                <TextoPassos>
                  <span style={{ width: '80%' }}>
                    <strong>3.</strong> Pelo app as pessoas buscam profissionais
                    de acordo com a especialidade, localidade ou tipo de
                    atendimento.
                  </span>
                </TextoPassos>
              </PassoaPasso>
              <PassoaPasso>
                <ImagemIcone src={IconTeste} alt />
                <TextoPassos>
                  <span style={{ width: '80%' }}>
                    <strong>4.</strong> Após escolher um profissional a pessoa
                    trans obtém as informações de contato para agendar um
                    atendimento.
                  </span>
                </TextoPassos>
              </PassoaPasso>
            </ContainerdeUso>
            <ContainerButton>
              <ButtonnProfissional to="/cadastro">
                <Icones src={Cadastro} alt="" />
                Cadastro como profissional
              </ButtonnProfissional>
              <ButtonnDonwload href="#">
                <Icones src={Donwload} alt="" />
                Download do app
              </ButtonnDonwload>
            </ContainerButton>
          </WrapperComoFunciona>
        </ContainerComoFunciona>
        <ContainerCenarioAtual>
          <WrapperCenarioAtual>
            <TituloHome3>O cenário atual</TituloHome3>
            <ContainerDadosCenario>
              <DocPsico src={DocPsicoo} />

              <DadosInformativos>
                <Dados>
                  <TituloDados>4 </TituloDados>
                  <TextoDados>
                    <span style={{ color: '#744D83', fontWeight: '700' }}>
                      milhões{' '}
                    </span>
                    de pessoas trans no Brasil. (1)
                  </TextoDados>
                </Dados>
                <Dados>
                  <TituloDados>85%</TituloDados>
                  <TextoDados>
                    dos homens trans declararam já ter precisado de atendimento
                    médico e deixado de procurar atendimento
                    <strong>e não procurado. </strong>(2)
                  </TextoDados>
                </Dados>
              </DadosInformativos>
              <DadosInformativos>
                <Dados>
                  <TituloDados>40% </TituloDados>
                  <TextoDados>
                    das pessoas trans <strong>já tentaram o suícidio</strong> já
                    tentaram o suícidio,apontando uma necessidade urgente de
                    mais atendimento psicológico. (3)
                  </TextoDados>
                </Dados>
                <Dados>
                  <TituloDados>35</TituloDados>
                  <TextoDados>
                    <span style={{ color: '#744D83', fontWeight: '700' }}>
                      anos
                    </span>
                    , é a estimativa média de vida de uma pessoa trans no
                    Brasil. Acesso adequado a saúde física e mental, poderiam
                    aproximar esse número da média do restante da população, 75
                    anos. (4)
                  </TextoDados>
                </Dados>
              </DadosInformativos>
            </ContainerDadosCenario>
          </WrapperCenarioAtual>
        </ContainerCenarioAtual>
        <ContainerAjudaProfissional>
          <WrapperAjudaProfissional>
            <TituloHome3>
              Como um(a) profissional da saúde pode ajudar
            </TituloHome3>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                gap: '195px',
              }}
            >
              <ParaAjudar>
                <PossoAjudar>
                  <TextoAjudar>
                    1 Criando um ambiente seguro de atendimento.
                  </TextoAjudar>
                  <TextoAjudar>
                    2 Entendendo a questão da identidade de gênero e tratando as
                    pessoas trans de acordo com suas identidades.
                  </TextoAjudar>
                  <TextoAjudar>
                    3 Anunciando o seu atendimento como abertamente inclusivo em
                    relação às pessoas trans e as suas necessidades.
                  </TextoAjudar>
                </PossoAjudar>
              </ParaAjudar>
              <DocPsico src={Profissionais} />
            </div>
          </WrapperAjudaProfissional>
        </ContainerAjudaProfissional>
      </ContainerInicial>
      <Footer />
    </>
  );
}

export default PageHome;
