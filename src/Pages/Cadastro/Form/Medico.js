import React from 'react';
import {
  Profissionais,
  Medico,
  TextOpcao,
  Opcao,
  ButtonCadastro,
  ContainerCRM,
  Informacoes,
} from '../style';
import Input from '../../../components/Input';

const MedicoForm = () => {
  return (
    <>
      <ContainerCRM>
        <Input type='text' id='number' label='CRM' />
        <Input type='text' id='number' label='CRM' />
      </ContainerCRM>

      <ButtonCadastro type='submit'>Entrar</ButtonCadastro>

      <Informacoes>
        Por quê pedimos essas informações: Validamos seu CRM para garatir a
        segurança das pessoas que acessam a plataforma e a legitimidade dos
        anúncios reslizados!
      </Informacoes>
    </>
  );
};

export default MedicoForm;
