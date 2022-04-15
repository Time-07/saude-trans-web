import { createContext, useState, useContext } from 'react';

export const CadastroContext = createContext([]);

export function CadastroProvider({ children }) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <CadastroContext.Provider
      value={{
        step,
        setStep,
        data,
        setData,
        error,
        setError,
        loading,
        setLoading,
      }}
    >
      {children}
    </CadastroContext.Provider>
  );
}

export const useCadastro = () => {
  return useContext(CadastroContext);
};
