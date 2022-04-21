import React, { useState } from 'react';
import Header from '../../components/Header/';
import Footer from '../../components/Footer';
import Donwload from '../../assets/donwload.png';
import Cadastro from '../../assets/cadastro.png';
import { ReactComponent as Seta } from '../../assets/setaBaixo.svg';
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
  ContainerTextoAjudar,
  RespostaTexto,
  ContainerInformativoAjuda,
  TextoAjudaInfo,
  TituloAjuda,
} from './style.js';
import DocPsicoo from '../../assets/home3.png';
import Profissionais from '../../assets/Homepage4.png';
import ImagemHome from '../../assets/Homepage1.png';
import IconBusca from '../../assets/iconeBusca.png';
import IconContato from '../../assets/iconecontato.png';
import IconMedico from '../../assets/iconemédico.png';
import IconTrans from '../../assets/iconeTrans1.png';

const faqPost = [
  {
    id: 1,

    question:
      '1. Entendendo a questão da identidade de gênero e tratando as pessoas trans de acordo com suas identidades.',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    id: 2,

    question: '2. Criando um ambiente seguro de atendimento.',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    id: 3,

    question:
      '3. Anunciando o seu atendimento como inclusivo em relação às pessoas trans e as suas necessidades.',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
];

function PageHome() {
  const [openFaq, setOpenFaq] = useState(-1);

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
                <ImagemIcone src={IconMedico} alt />
                <TextoPassos>
                  <span style={{ width: '80%' }}>
                    <strong>1.</strong> O profissional de saúde se cadastra na
                    plataforma, oferecendo seu serviço e assumindo o compromisso
                    de respeito com pacientes trans.
                  </span>
                </TextoPassos>
              </PassoaPasso>
              <PassoaPasso>
                <ImagemIcone src={IconTrans} alt />
                <TextoPassos>
                  <span style={{ width: '80%' }}>
                    <strong>2.</strong> A pessoa trans se cadastra no nosso app,
                    onde exibimos os profissionais disponíveis além de
                    informações de cuidado à saúde.
                  </span>
                </TextoPassos>
              </PassoaPasso>
              <PassoaPasso>
                <ImagemIcone src={IconBusca} alt />
                <TextoPassos>
                  <span style={{ width: '80%' }}>
                    <strong>3.</strong> Pelo app as pessoas buscam profissionais
                    de acordo com a especialidade, localidade ou tipo de
                    atendimento.
                  </span>
                </TextoPassos>
              </PassoaPasso>
              <PassoaPasso>
                <ImagemIcone src={IconContato} alt />
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
                  <TextoDados>
                    <TituloDados>4 </TituloDados>
                    <span style={{ color: '#744D83', fontWeight: '700' }}>
                      milhões
                    </span>
                    de pessoas trans no Brasil.
                    <a
                      href="https://www.brasildefato.com.br/2021/11/22/brasil-tem-4-milhoes-de-pessoas-trans-e-nao-binarias-revela-estudo-da-unesp-inedito-no-pais#:~:text=Pesquisa%20in%C3%A9dita%20na%20Am%C3%A9rica%20Latina,212%2C6%20milh%C3%B5es%20de%20cidad%C3%A3os"
                      target="_blank"
                      rel="noreferrer"
                    >
                      (1)
                    </a>
                  </TextoDados>
                </Dados>
                <Dados>
                  <TextoDados>
                    <TituloDados>85%</TituloDados>
                    dos homens trans declararam já ter precisado de atendimento
                    médico e deixado de procurar atendimento
                    <strong>e não procurado. </strong>
                    <a
                      href="http://www.nuhufmg.com.br/homens-trans-relatorio2.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      (2)
                    </a>
                  </TextoDados>
                </Dados>
              </DadosInformativos>
              <DadosInformativos>
                <Dados>
                  <TextoDados>
                    <TituloDados>40% </TituloDados>
                    das pessoas trans <strong>já tentaram o suícidio</strong> já
                    tentaram o suícidio,apontando uma necessidade urgente de
                    mais atendimento psicológico.{' '}
                    <a
                      href="https://jornal.usp.br/atualidades/alem-da-discriminacao-e-violencia-populacao-trans-sobrevive-aos-transtornos-psicologicos/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      (3)
                    </a>
                  </TextoDados>
                </Dados>
                <Dados>
                  <TextoDados>
                    <TituloDados>35</TituloDados>
                    <span style={{ color: '#744D83', fontWeight: '700' }}>
                      anos
                    </span>
                    , é a estimativa média de vida de uma pessoa trans no
                    Brasil. Acesso adequado a saúde física e mental, poderiam
                    aproximar esse número da média do restante da população, 75
                    anos.
                    <a
                      href="https://www.medicina.ufmg.br/enquanto-existir-transfobia-saude-das-mulheres-trans-estara-comprometida/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      (4)
                    </a>
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
                justifyContent: 'space-evenly',
                alignItems: 'center',
                width: '90%',
              }}
            >
              <ParaAjudar>
                {faqPost.map((faq, index) => (
                  <PossoAjudar
                    onClick={() => setOpenFaq(openFaq !== index ? index : -1)}
                    key={faq.id}
                  >
                    <ContainerTextoAjudar>
                      <TextoAjudar>{faq.question}</TextoAjudar>
                      <Seta />
                    </ContainerTextoAjudar>

                    {index === openFaq ? (
                      <RespostaTexto>{faq.answer}</RespostaTexto>
                    ) : null}
                  </PossoAjudar>
                ))}
              </ParaAjudar>
              <DocPsico src={Profissionais} />
            </div>
          </WrapperAjudaProfissional>
        </ContainerAjudaProfissional>
        <ContainerInformativoAjuda>
          <TituloAjuda>Vamos mudar essa história?</TituloAjuda>
          <TextoAjudaInfo>
            Estamos em busca de ginecologistas, psicólogos(as),
            endócrinologistas, urologistas e psiquiatras dispostos a oferecer
            atendimento digno ao público trans. Gostaria de ser um aliado ou
            aliada dessa causa? Anuncie hoje mesmo seu perfil no DiverSaúde!
          </TextoAjudaInfo>
          <ButtonTitulo
            to="/cadastro"
            style={{
              width: '149px',
              height: '56px',
            }}
          >
            Cadastre-se
          </ButtonTitulo>
        </ContainerInformativoAjuda>
      </ContainerInicial>
      <Footer />
    </>
  );
}

export default PageHome;
