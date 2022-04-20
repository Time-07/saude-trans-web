import React from 'react';
import { Container, DescricaoModal, TituloModal } from './style';
import { ReactComponent as Icon } from '../../assets/interrogacao.svg';

function ModalAviso({ titulo, descricao }) {
  return (
    <Container>
      <TituloModal>
        <Icon /> {titulo}
      </TituloModal>
      <DescricaoModal>{descricao}</DescricaoModal>
    </Container>
  );
}

export default ModalAviso;
