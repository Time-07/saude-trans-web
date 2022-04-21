import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import Cookies from 'universal-cookie';

const RoutePrivate = ({ component: RouteComponent }) => {
  const cookies = new Cookies();
  const isAuthenticated = cookies.get('user-data-token');

  if (isAuthenticated) {
    return <RouteComponent />;
  }

  return <Navigate to="/" />;
};

export default RoutePrivate;
