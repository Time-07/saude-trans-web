import React from 'react';
import Header from '../../components/Header';
import { useCadastro } from '../../context/useCadastro';
import MedicoForm from './Form/Medico';
import PsicologoForm from './Form/Psicologo';
import TipoProfissional from './Form/TipoProfissional';
import {
  ContainerCadastro,
  Wrapper,
  ContanierTelaCadastro,
  TitleDoc,
  Detalhe,
  Text,
  OpcaoCadastro,
  ContainerTitle,
} from './style';

const Cadastro = () => {
  const { step } = useCadastro();

  return (
    <ContanierTelaCadastro>
      <Header />
      <Wrapper>
        <ContainerCadastro>
          <ContainerTitle>
            <TitleDoc>Cadastro</TitleDoc>
            <Detalhe value='32' max='100'></Detalhe>
            <Text>
              Antes de iniciarmos o Cadastro, selecione abaixo o seu tipo de
              atuação.
            </Text>
          </ContainerTitle>
          <OpcaoCadastro>
            {step === 1 && <TipoProfissional />}
            {step === 2 && <MedicoForm />}
            {step === 3 && <PsicologoForm />}
          </OpcaoCadastro>
        </ContainerCadastro>
      </Wrapper>
    </ContanierTelaCadastro>
  );
};

export default Cadastro;
