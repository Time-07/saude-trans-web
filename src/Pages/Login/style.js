import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerLogin = styled.div`;
  min-height:100vh;
  display: flex;
  align-items: center;
  justify-content: center;
 
`;

export const WrapperLogin = styled.div`
  width: 384px;
  height: 515px;
  left: 528px;
  top: 152px;
  background: #fff;
  overflow:hidden;
  padding:  50px ;
  box-shadow: 4px 8px 4px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
`;
export const Form  = styled.form` 
`;

export const Title = styled.h2`
  display: block;
  color: #000;
  font-style: normal;
  font-weight:400;
  font-size: 40px;
  font-family: 'Fredoka', sans-serif;
  text-align: center; 
  line-height: 48px;  
`;

export const WrapperInput = styled.div`
  width: 100%
  position: absolute;
  margin-bottom:36px;  
  background: :#fff;

  input {
    &:focus {
      border: 2px solid #A4A4A4;     
    }
    & ::placeholder:focus{
      color:transparent;      
    }
    & {
      :focus + label,
      :not(:placeholder-shown) + label{
       font-size: 16px;
       top:0;
       color: #6F6F6F;
    }
  }

  label{
    &:focus + label {
      border-bottom: 2px solid  #6F6F6F;
    }
    & ::placeholder{
      color:transparent;
    }
  }
  }
`;

export const Input = styled.input`
  border: 1px solid #A4A4A4;
  width: 300px;
  height: 64px;  
  padding: 20px;
  border-radius: 8px;
  margin:  10px auto;  
`;

export const Alerta = styled.div`
  color: #c0392b;
  font-size: 14px;
`;

export const Label = styled.div`
  color: #c0392b;
  font-size: 14px;
`;

export const EsquecerSenha = styled.span`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-size:14px;
  line-height:24px; 
  text-decoration: underline;
  color: #00000080;
`;
export const ContainerBtn = styled.div`
  display: flex; 
  justify-content:center;
  padding-bottom:20px;
  
  button {
    &:hover {
      background-color: #cacaca ;      
    }
  }
`;

export const ButtonLogin = styled.button`
  padding: 16px 92px;
  margin: auto;
  border-radius: 10px;
  font-size: 20px;
  border:none;   
  width: 256px;
  height: 64px;
`;

export const Logar = styled(Link)`
  color:#000;
  text-decoration:none; 
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight:500;
  font-size:24px;
  line-height:32px;   
`
export const ContainerCriar = styled.div`
  display: flex;
  flex-direction:column;
  flex-wrap: wrap;
  justify-content:center;
  padding-bottom:20px;
`;

export const TextCadastro = styled.p`
  color: #000;
  font-style: normal;
  text-align: center; 
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-size:14px;
  line-height:24px; 
`;
export const Cadastro = styled(Link)`
  color: #A4A4A4;  
  margin:auto;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-size:14px;
  line-height:24px;   
`;














