import styled from "styled-components";

export const ContainerCadastro = styled.h1`
  width: 592px;
  height: 480px;
  margin:50px auto;
  background: #fff;
  box-shadow: 4px 8px 4px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
`;

export const TitleDoc = styled.h1`
  color: #000;
  font-family: 'Fredoka';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  text-align: center; 
`;

export const Detalhe = styled.div`
  width: 405px;
  height: 8px;
  margin-left: 93px;
  margin-top: 44px;
  background: #C4C4C4;
  border-radius: 10px;
`;

export const Text = styled.p`
  color: #000;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px; 
  margin-top:10px;
  margin-Left:33px;
`;

export const OpcaoCadastro = styled.div`
display: flex;
flex-direction:row;  
`;

export const Profissionais = styled.div`
 display:flex;
 flex-direction:column;
 cursor: pointer;
`;

export const Opcao = styled.div`
width: 168px;
height: 168px;
margin-left: 80px;
margin-top: 30px;
border-radius:50%;
background: #C4C4C4;  
`;

export const TextOpcao = styled.label`
font-family: 'Fredoka';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 40px;
color: #000000;
margin-left: 105px;

&:hover {
     text-decoration:underline; 
     cursor:pointer;   
    }
`;

export const Medico = styled.label`
font-family: 'Fredoka';
font-style: normal;
font-size: 18px;
line-height: 40px;
color: #000000;

`;

export const Psicologo = styled.label`
font-family: 'Fredoka';
font-style: normal;
font-size: 18px;
line-height: 40px;
color: #000000; 
`;