import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CadastroProvider } from './context/useCadastro';
import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <CadastroProvider>
        <Routes />
        <GlobalStyle />
      </CadastroProvider>
    </BrowserRouter>
  );
}

export default App;
