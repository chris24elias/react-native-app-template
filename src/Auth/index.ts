import {useContext} from 'react';
import AuthStateContext from './AuthContext';
import {LoginCreds} from '../Store/model/Login';

interface AuthContext {
  logout: any;
  login: (creds: LoginCreds) => void;
  state: string;
}

const useAuth = () => {
  let auth: AuthContext = useContext(AuthStateContext);
  return auth;
};

export default useAuth;
