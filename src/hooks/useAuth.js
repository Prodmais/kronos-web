import api from '../api';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setFlashMessage } = useFlashMessage();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }
  }, []);
  
  async function login(user) {
    let msgText = "Login realizado com sucesso";
    let msgType = "success";

    try {

      setLoading(true);

      const data = await api.post('/users/login', user).then(response => {
        
        setLoading(false);

        return response.data;
      });

      await authUser(data);


    } catch (err) {

      console.log(err);
      
      setLoading(false);
  
    }
  }
  
  async function authUser(data) {
    setAuthenticated(true);
    localStorage.setItem('token', JSON.stringify(data.token));

    navigate('/');
  }

  async function register(user) {
    let msgText = 'Cadastro realizado com sucesso!';
    let msgType = 'success';

    try {
      const data = await api.post('/users/register', user).then(response => response.data);      
      await authUser(data);
    }
    catch(err) {
      console.log(err.response)
      msgText = err.response.data.message;
      msgType = 'error';
    }


  }

  function logout() {
    const msgText = "Logout realizado com sucesso";
    const msgType = 'success';

    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.Authorization = undefined;
    navigate('/login');
  }

  return { authenticated, register, logout, login, loading };
}