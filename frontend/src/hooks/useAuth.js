import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext.jsx';
import { authService } from '../services/authService.js';

export function useAuth() {
  const { token, isAuthenticated, login, logout } = useAuthContext();
  const navigate = useNavigate();

  const signIn = async (email, password) => {
    const data = await authService.login(email, password);
    login(data.token);
    navigate('/dashboard');
  };

  const signUp = async (name, email, password) => {
    const data = await authService.register(name, email, password);
    login(data.token);
    navigate('/dashboard');
  };

  const signOut = () => {
    logout();
    navigate('/login');
  };

  return { token, isAuthenticated, signIn, signUp, signOut };
}
