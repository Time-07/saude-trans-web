import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import PageLogin from '../Pages/Login';
import PageCadastro from '../Pages/Cadastro';
import Perfil from '../Pages/Perfil';
import RoutePrivate from './RoutePrivate';

function routes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<PageLogin />} />
      <Route path="/cadastro" element={<PageCadastro />} />
      <Route path="/perfil" element={<RoutePrivate component={Perfil} />} />
    </Routes>
  );
}
export default routes;
