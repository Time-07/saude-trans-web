import React from 'react';
import { Container, ButtonSalvar, TextoAtendimento, TextArea } from './style';

const Apresentacao = () => {
  return (
    <Container>
      <TextoAtendimento>Apresentação</TextoAtendimento>
      <TextArea>Experiência com pacientes trans</TextArea>
      <TextArea>Currículo e/ou formação</TextArea>
      <ButtonSalvar>Salvar</ButtonSalvar>
    </Container>
  );
};

export default Apresentacao;
