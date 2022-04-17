import styled from 'styled-components';

export const Conatiner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
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
  height: 64px;
  background: #f5edf8;
  display: flex;
  justify-content: space-between;
  padding: 0 120px;
`;

export const Logo = styled.img`
  width: 104px;
  height: 64px;
`;

export const ContainerMenuPerfil = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;
`;

export const MenuItem = styled.button`
  color: #111111;
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
    background: #E5C7F2;
    }
  }
`;

export const InicioPerfil = styled.div`
  width: 588px;
  height: 192px;
  background: #f5edf8;
  border-radius: 32px;
  padding: 32px 48px;
  margin-top: 40px;
`;
export const DetalhePerfil = styled.div`
  content: '';
  width: 100%;
  border-top: 4px solid #f5edf8;
`;

export const TextoPerfil = styled.h1`
  font-family: 'Fredoka';
  font-style: normal;
  font-weight: 400;
  font-size: 51px;
  line-height: 120%;
  display: flex;
  align-items: center;
  color: #44314b;
`;
export const TextoInformativo = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: #1d1620;
`;

export const PerfilProfissinal = styled.div`
  display: flex;
  gap: 24px;
`;
export const PerfilLeft = styled.div`
  width: 282px;
  height: 100%;
  background: #ffffff;
  border: 1px solid rgba(219, 152, 245, 0.33);
  box-sizing: border-box;
  box-shadow: 2px 2px 10px 1px rgba(181, 181, 181, 0.33);
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
  color: #111111;
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
  width: 187px;
  height: 44px;
  cursor: pointer;
  border: none;
  background: ${props => (props.active ? '#e5c7f2' : '#ffffff')};
  border-radius: 30px;
  font-family: 'Fredoka';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  padding: 8px 16px;
  color: #111111;
`;
export const ButtonAtivar = styled.button`
  width: 189px;
  height: 56px;
  background: #fcf1f3;
  border: 1px solid #f5a9b8;
  box-sizing: border-box;
  box-shadow: 2px 2px 10px 1px rgba(181, 181, 181, 0.33);
  border-radius: 8px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #481F26;
  cursor: pointer;
  &:hover {
    background: #F9D7DD;
    }
  }
`;
