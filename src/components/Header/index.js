/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import {
  Container,
  Logo,
  Login,
  Dropdown,
  Wrapper,
  Icone,
  Home,
} from './style';
import LogoImg from '../../assets/logoo.jpeg';
import Iconee from '../../assets/inconsetaa.png';
import Donwload from '../../assets/donwload.png';
import Loginn from '../../assets/login.png';
import Cadastro from '../../assets/cadastro.png';

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo src={LogoImg} alt="logoIoasys" />

        <Dropdown>
          <Home to="/">Home</Home>
          <div className="dropdown">
            <span>
              Encontrar Profissional
              <Icone src={Iconee} alt="logoIoasys" />
            </span>
            <div className="dropdown-content">
              <Login to="/perfil">
                <Icone src={Donwload} alt="logoIoasys" />
                Download do app
              </Login>
            </div>
          </div>
          <div className="dropdown">
            Sou Profissional <Icone src={Iconee} alt="logoIoasys" />
            <div className="dropdown-content">
              <Login to="/cadastro">
                <Icone src={Cadastro} alt="logoIoasys" />
                Cadastro
              </Login>
              <Login to="/login">
                <Icone src={Loginn} alt="logoIoasys" />
                Login
              </Login>
            </div>
          </div>
        </Dropdown>
      </Wrapper>
    </Container>
  );
};

export default Header;
