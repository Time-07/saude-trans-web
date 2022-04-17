import { Container } from '@mui/material';
import React from 'react';
import Header from '../../components/Header/';
import Footer from '../../components/Footer';
import {
  ContainerInicial,
  ContainerUm,
  Buttonn,
  ContainerDois,
  ContainerdeUso,
  PassoaPasso,
  Passos,
  TextoPassos,
  ContainerTres,
  TituloHome3,
  DadosInformativos,
  Dados,
  TituloDados,
  TextoDados,
  TextoDados2,
  ContainerQuatro,
  ParaAjudar,
  PossoAjudar,
  TextoAjudar,
  TituloHome,
  TextHome,
  TituloHome2,
} from './style.js';

function PageHome() {
  return (
    <>
      <Header />

      <ContainerInicial>
        <ContainerUm>
          <TituloHome>
            Respeito é um direito de todos, todas e todes. Saúde, também.
          </TituloHome>
          <TextHome>
            A discriminação que as pessoas trans sofrem na busca por atendimento
            médico e psicológico. Nos ajude a mudar esse cenário e se torne hoje
            mesmo aliado ou aliada dessa causa. respeitada.
          </TextHome>
          <Buttonn>Quero me cadastrar!</Buttonn>
        </ContainerUm>
        <ContainerDois>
          <TituloHome2>Como funciona o DiverSaúde</TituloHome2>
          <ContainerdeUso>
            <PassoaPasso>
              <Passos>1</Passos>
              <TextoPassos>
                O profissional de saúde se cadastra na plataforma, oferecendo
                seu serviço e o compromisso de respeito com pacientes trans.
              </TextoPassos>
            </PassoaPasso>
            <PassoaPasso>
              <Passos>2</Passos>
              <TextoPassos>
                A pessoa trans se cadastra no nosso app, onde exibimos os
                profissionais disponíveis além de informações de cuidado à
                saúde.
              </TextoPassos>
            </PassoaPasso>
            <PassoaPasso>
              <Passos>3</Passos>
              <TextoPassos>
                Pelo app as pessoas buscam profissionais de acordo com a
                especialidade, localidade ou tipo de atendimento.
              </TextoPassos>
            </PassoaPasso>
            <PassoaPasso>
              <Passos>4</Passos>
              <TextoPassos>
                Após escolher um profissional a pessoa trans tem acesso às
                informações de contato e procurará o(a) profissional para
                agendar um atendimento.
              </TextoPassos>
            </PassoaPasso>
          </ContainerdeUso>
        </ContainerDois>
        <ContainerTres>
          <h1>imgame</h1>

          <DadosInformativos>
            <TituloHome3>
              O cenário atual <br /> 4 milhões
            </TituloHome3>
            <Dados>
              <TituloDados>40% </TituloDados>
              <TextoDados>
                das pessoas trans <strong>já tentaram o suícidio</strong> já
                tentaram o suícidio
              </TextoDados>
              <TextoDados2>
                Pelo app as pessoas buscam profissionais de acordo com a
                especialidade, localidade ou tipo de atendimento.
              </TextoDados2>
            </Dados>
            <Dados>
              <TituloDados>85%</TituloDados>
              <TextoDados>
                dos homens trans declararam já ter precisado de atendimento
                médico e <strong>deixado de procurar atendimento</strong>
              </TextoDados>
              <TextoDados2>
                Pelo app as pessoas buscam profissionais de acordo com a
                especialidade, localidade ou tipo de atendimento.
              </TextoDados2>
            </Dados>
          </DadosInformativos>
        </ContainerTres>
        <ContainerQuatro>
          <ParaAjudar>
            <TituloHome3>Como você pode ajudar</TituloHome3>
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
          <h1>imgame</h1>
        </ContainerQuatro>
      </ContainerInicial>
      <Footer />
    </>
  );
}

export default PageHome;
