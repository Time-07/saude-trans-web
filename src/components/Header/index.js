import React from "react";
import { Container,  Logo, Login, Dropdown,Dropbtn, Dropdowncontent, Icone } from "./style";
import LogoImg from "../../assets/logoo.jpeg"
import Iconee from "../../assets/iconseta.png"



const Header = () => {
  return (
    <Container> 
    
      <Logo src={LogoImg} alt="logoIoasys" /> 
      
      <Dropdown> 
        <Dropbtn>Encontrar Profissional<Icone src={Iconee} alt="logoIoasys" />     
          <Dropdowncontent className="container">
            <Login to="/perfil"><Icone src={Iconee} alt="logoIoasys" />Profissional</Login>                
          </Dropdowncontent>
          </Dropbtn>          
          <Dropbtn>Sou Profissional <Icone src={Iconee} alt="logoIoasys" />     
          <Dropdowncontent className="container">
            <Login to="/cadastro"><Icone src={Iconee} alt="logoIoasys" />  Cadastro</Login>                       
            <Login to="/login"><Icone src={Iconee} alt="logoIoasys" />  Login</Login>              
          </Dropdowncontent>
          </Dropbtn>  
        </Dropdown>  
              
       
    </Container>
  )
}

export default Header;