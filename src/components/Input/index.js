import React from 'react';
import { Container } from "./style"


function Input ({label, ...props}) {

 
  return (
    <Container error={props.errors}>
       <div id="float-label">
      <input {...props}/>

     <label htmlFor={label} className={props.value ? "Active": null} >
     {label}
      </label>
      </div>
    </Container>
  )
}

export default Input;
