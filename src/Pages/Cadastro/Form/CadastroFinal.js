import React from 'react';
import { useCadastro } from '../../../context/useCadastro';
import {
  TitleDoc,
  Detalhe,
  Texto,
  ContainerTitle,
  ButtonFinal,
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
      <ButtonFinal>Ir para o perfil </ButtonFinal>
    </>
  );
};

export default CadastroFinal;
