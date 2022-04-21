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
import Medicoo from '../../../assets/medico.png';
import Psico from '../../../assets/psico.png';

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
        Antes de iniciarmos o Cadastro, selecione o seu tipo de atuação.
      </Text>
      <ContainerFormTipoProfissional>
        <Profissionais onClick={clickMedico}>
          <Opcao>
            <Medico src={Medicoo} />
          </Opcao>
          <TextOpcao> Médico(a)</TextOpcao>
        </Profissionais>
        <Profissionais onClick={clickPsicologo}>
          <Opcao>
            <Psicologo src={Psico} />
          </Opcao>
          <TextOpcao>Psicólogo(a)</TextOpcao>
        </Profissionais>
      </ContainerFormTipoProfissional>
    </>
  );
};

export default TipoProfissional;
