import React from 'react'
import {  Profissionais, Medico, TextOpcao, Opcao, Psicologo } from "../style";


 const MedicoForm = () => {

  return (        
  <>
        <Profissionais>
          <Opcao><Medico htmlFor=""></Medico></Opcao>    
          <TextOpcao > Médico(a)</TextOpcao>         
        </Profissionais> 
              
   
  </>            
  )
 }
    
       

export default MedicoForm;