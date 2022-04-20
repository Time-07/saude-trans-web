import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CadastroProvider } from './context/useCadastro';
import { UserProvider } from './context/useUserData';
import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <CadastroProvider>
        <UserProvider>
          <Routes />
          <GlobalStyle />
        </UserProvider>
      </CadastroProvider>
    </BrowserRouter>
  );
}

export default App;
