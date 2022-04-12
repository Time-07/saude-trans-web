import React from 'react';
import Header from '../../components/Header';
import { useCadastro } from '../../context/useCadastro';
import MedicoForm from './Form/Medico';
import PsicologoForm from './Form/Psicologo';
import TipoProfissional from './Form/TipoProfissional';
import CadastroForm from './Form/CadastroForm';
import CadastroFinal from './Form/CadastroFinal';
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
          {step !== 5 ? (
            <>
              <ContainerTitle>
                <TitleDoc>Cadastro</TitleDoc>
                <Detalhe value={step} max="5" />
              </ContainerTitle>
              <OpcaoCadastro>
                {step === 1 && <TipoProfissional />}
                {step === 2 && <MedicoForm />}
                {step === 3 && <PsicologoForm />}
                {step === 4 && <CadastroForm />}
              </OpcaoCadastro>
            </>
          ) : (
            <CadastroFinal />
          )}
        </ContainerCadastro>
      </Wrapper>
    </ContanierTelaCadastro>
  );
};

export default Cadastro;
