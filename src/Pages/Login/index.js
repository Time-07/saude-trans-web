import React from "react";
import {  Title, Form, Input , ButtonLogin, ContainerLogin, TextCadastro, WrapperLogin, WrapperInput, ContainerBtn, ContainerCriar, Logar, Cadastro, Alerta, EsquecerSenha } from "./style";
import { useFormik } from "formik";
import *as yup from "yup";
import Header from "../../components/Header";


const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().required("O campo é obrigatório"),
      password: yup.number().required("O campo é obrigatório").positive()
      .integer(),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  });
   return (  
     <>
     <Header />
      <ContainerLogin>
        <WrapperLogin>
          <Form onSubmit={formik.handleSubmit}>
          <Title>login</Title> 
                          
        <WrapperInput>         
          <Input 
          type="email"
          id="email"
          placeholder="@email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}          
          />
          
          {formik.touched.email && formik.errors.email ? (
        <Alerta>{formik.errors.email}</Alerta>
      ) : null}
         <Input 
          type="password"
          id="password"
          placeholder="senha"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          />
           {formik.touched.password && formik.errors.password ? (
        <Alerta>{formik.errors.password}</Alerta>
      ) : null}
      <EsquecerSenha>Esqueci minha senha</EsquecerSenha>
        </WrapperInput>
        
        <ContainerBtn>
        <ButtonLogin>
          <Logar to="/perfil">Entrar</Logar>
        </ButtonLogin>
        </ContainerBtn>
        <ContainerCriar>
          <TextCadastro> Ainda não tem uma conta?</TextCadastro> 
          <Cadastro to="/login/cadastro">Cadastre-se</Cadastro >              
        </ContainerCriar>
        
          </Form >
      </WrapperLogin>     
      </ContainerLogin>
    </> 
       
  )
}

export default Login;