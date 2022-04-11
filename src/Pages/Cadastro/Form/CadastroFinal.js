import React from 'react';
import { useCadastro } from '../../../context/useCadastro';
import {
  ContainerCadastro,
  Wrapper,
  ContanierTelaCadastro,
  TitleDoc,
  Detalhe,
  Texto,
  OpcaoCadastro,
  ContainerTitle,
  ButtonCadastro,
} from '../style';
const CadastroFinal = () => {
  const { step } = useCadastro();
  return (
    <>
      <ContainerTitle>
        <TitleDoc>Parabéns!</TitleDoc>
        <Detalhe value={step} max="5" />
        <Texto>Cadastro concluído com sucesso.</Texto>
      </ContainerTitle>
      <ButtonCadastro>Ir para o perfil </ButtonCadastro>
    </>
  );
};

export default CadastroFinal;
