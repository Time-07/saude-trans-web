import React from 'react'
import Header from "../../components/Header"
import { useCadastro } from '../../context/useCadastro';
import MedicoForm from './Form/Medico';
import PsicologoForm from './Form/Psicologo';
import TipoProfissional from './Form/TipoProfissional';
import { ContainerCadastro, TitleDoc, Detalhe, Text, OpcaoCadastro } from "./style";


 const Cadastro = () => {
   const {step} = useCadastro()
  return (        
  <>
    <Header />
      <ContainerCadastro> 
        <TitleDoc>Cadastro</TitleDoc>
          <Detalhe></Detalhe>
          <Text>Antes de iniciarmos o Cadastro, selecione abaixo o seu tipo de atuação.</Text> 
      <OpcaoCadastro>

     {step === 1 && <TipoProfissional />    }  
     {step === 2 && <MedicoForm />    }   
     {step === 3 && <PsicologoForm />    }    
        </OpcaoCadastro>    
      </ContainerCadastro>
  </>            
  )
 }
    
       

export default Cadastro