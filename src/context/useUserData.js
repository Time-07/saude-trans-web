import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { createContext, useState, useContext, useEffect } from 'react';

export const UserContext = createContext([]);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const cookies = new Cookies();

  const userLogout = useCallback(async function () {
    setUser(null);
    setError(null);
    setLoading(false);

    cookies.remove('user-data');
    localStorage.clear();
    navigate('/login');
  }, []);

  useEffect(() => {
    const newLocal = localStorage.getItem('user-data');
    if (!user) {
      if (!newLocal) {
        userLogout();
        return;
      }
      const local = JSON.parse(newLocal);
      if (local) {
        setUser(local);
      } else {
        userLogout();
      }
    }
  }, []);

  const userLogin = async response => {
    console.log(response);
    const user = {
      userId: response.userId,
      userRole: response.userRole,
    };
    setUser(response);
    await localStorage.setItem('user-data', JSON.stringify(user));
    await cookies.set('user-data-token', response.accessToken, {
      path: '/',
      maxAge: 43200,
    });
    navigate('/perfil');
  };

  return (
    <UserContext.Provider
      value={{
        userLogout,
        userLogin,
        user,
        setUser,
        error,
        setError,
        loading,
        setLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUserData = () => {
  return useContext(UserContext);
};
