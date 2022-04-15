/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Container, Logo, Login, Dropdown, Wrapper, Icone } from './style';
import LogoImg from '../../assets/logoo.jpeg';
import Iconee from '../../assets/seta-abrir.svg';

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo src={LogoImg} alt="logoIoasys" />

        <Dropdown>
          <div className="dropdown">
            <span>
              Encontrar Profissional
              <Icone src={Iconee} alt="logoIoasys" />
            </span>
            <div className="dropdown-content">
              <Login to="/perfil">
                <Icone src={Iconee} alt="logoIoasys" />
                Profissional
              </Login>
            </div>
          </div>
          <div className="dropdown">
            Sou Profissional <Icone src={Iconee} alt="logoIoasys" />
            <div className="dropdown-content">
              <Login to="/cadastro">
                <Icone src={Iconee} alt="logoIoasys" />
                Cadastro
              </Login>
              <Login to="/login">
                <Icone src={Iconee} alt="logoIoasys" />
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
