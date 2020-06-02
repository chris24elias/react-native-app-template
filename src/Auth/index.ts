import {useContext} from 'react';
import AuthStateContext from './AuthContext';

interface AuthContext {
  logout: any;
  login: any;
  state: string;
}

const useAuth = () => {
  let auth: AuthContext = useContext(AuthStateContext);
  return auth;
};

export default useAuth;
