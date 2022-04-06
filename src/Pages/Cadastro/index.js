import React from 'react'
import Header from "../../components/Header"
import { ContainerCadastro, TitleDoc, Detalhe, Text, Profissionais, Medico, TextOpcao, OpcaoCadastro, Opcao, Psicologo } from "./style";


 const Cadastro = () => {
  return (        
  <>
    <Header />
      <ContainerCadastro> 
        <TitleDoc>Cadastro</TitleDoc>
          <Detalhe></Detalhe>
          <Text>Antes de iniciarmos o Cadastro, selecione abaixo o seu tipo de atuação.</Text> 
      <OpcaoCadastro>
        <Profissionais>
          <Opcao><Medico htmlFor=""></Medico></Opcao>    
          <TextOpcao > Médico(a)</TextOpcao>         
        </Profissionais> 
        <Profissionais>
          <Opcao><Psicologo htmlFor=""></Psicologo></Opcao>    
          <TextOpcao>Psicólogo(a)</TextOpcao>         
        </Profissionais>        
        </OpcaoCadastro>    
      </ContainerCadastro>
  </>            
  )
 }
    
       

export default Cadastro