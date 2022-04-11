import React from 'react';
import { useCadastro } from '../../../context/useCadastro';
import {
  Profissionais,
  Medico,
  TextOpcao,
  Opcao,
  Psicologo,
  ContainerFormTipoProfissional,
  Text,
} from '../style';

const TipoProfissional = () => {
  const { setStep, setData } = useCadastro();

  const clickMedico = () => {
    setStep(2);
    setData(state => ({ ...state, tipoProfissional: 'medico' }));
  };

  const clickPsicologo = () => {
    setStep(3);
    setData(state => ({ ...state, tipoProfissional: 'psicologo' }));
  };

  return (
    <>
      <Text>
        Antes de iniciarmos o Cadastro, selecione abaixo o seu tipo de atuação.
      </Text>
      <ContainerFormTipoProfissional>
        <Profissionais onClick={clickMedico}>
          <Opcao>
            <Medico htmlFor="" />
          </Opcao>
          <TextOpcao> Médico(a)</TextOpcao>
        </Profissionais>
        <Profissionais onClick={clickPsicologo}>
          <Opcao>
            <Psicologo htmlFor="" />
          </Opcao>
          <TextOpcao>Psicólogo(a)</TextOpcao>
        </Profissionais>
      </ContainerFormTipoProfissional>
    </>
  );
};

export default TipoProfissional;
