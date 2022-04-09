import React from 'react';
import { useCadastro } from '../../../context/useCadastro';
import { Profissionais, Medico, TextOpcao, Opcao, Psicologo } from '../style';

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
      <Profissionais onClick={clickMedico}>
        <Opcao>
          <Medico htmlFor=''></Medico>
        </Opcao>
        <TextOpcao> Médico(a)</TextOpcao>
      </Profissionais>
      <Profissionais onClick={clickPsicologo}>
        <Opcao>
          <Psicologo htmlFor=''></Psicologo>
        </Opcao>
        <TextOpcao>Psicólogo(a)</TextOpcao>
      </Profissionais>
    </>
  );
};

export default TipoProfissional;
