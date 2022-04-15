import styled from 'styled-components';

export const Conatiner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;
`;

export const Wrapper = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin-bottom: 3rem;
`;

export const ContainerPerfil = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: space-between;
  box-shadow: 4px 8px 4px rgba(0, 0, 0, 0.15);
  padding: 0 120px;
`;

export const Logo = styled.img`
  width: 140px;
  height: 104px;
`;

export const ContainerMenuPerfil = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;
`;

export const MenuItem = styled.button`
  color: #000;
  background: none;
  font-size: 16px;
  border: none;
  cursor: pointer;
  padding: 5px 8px;
  border-radius: 60px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;

  &:hover {
    background: #d7d7d7;
    }
  }
`;

export const InicioPerfil = styled.div``;

export const TextoPerfil = styled.h1`
  font-family: 'Fredoka';
  font-style: normal;
  font-weight: 400;
  font-size: 51px;
  line-height: 120%;
  display: flex;
  align-items: center;
  color: #1f1f1f;
`;
export const TextoInformativo = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: #1f1f1f;
  width: 50%;
  height: 96px;
`;

export const PerfilProfissinal = styled.div`
  display: flex;
  gap: 24px;
`;
export const PerfilLeft = styled.div`
  width: 282px;
  height: 100%;
  background: #ffffff;
  border-radius: 16px;
`;

export const PerfilRight = styled.div`
  width: 592px;
  height: 100%;
  background: #ffffff;
  border-radius: 16px;
`;
export const TextoContatoInfo = styled.h1`
  font-family: 'Fredoka';
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 120%;
  text-align: center;
  color: #000000;
  margin-top: 32px;
`;
export const TextPerfil = styled.h1`
  font-family: 'Fredoka';
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 36px;
  width: 100%;
  color: #000000;
  margin-top: 32px;
  margin-left: 31px;
`;

export const Perfil = styled.div``;

export const MenuButtons = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  gap: 16px;
`;

export const ButtonPublicar = styled.button`
  width: 220px;
  height: 44px;
  cursor: pointer;
  border: none;
  background: ${props => (props.active ? '#bebebe' : '#ffffff')};
  border-radius: 30px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;
