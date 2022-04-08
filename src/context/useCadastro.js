import { createContext, useState, useContext } from 'react';

export const CadastroContext = createContext([]);

export function CadastroProvider({ children }) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({});



  return (
    <CadastroContext.Provider value={{
      step, setStep,
      data, setData
    
    }}>
      {children}
    </CadastroContext.Provider>
  )
}

export const useCadastro = () => {
  return useContext(CadastroContext);
}