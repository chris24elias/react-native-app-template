import React, {useState, useEffect, useCallback} from 'react';
import {Alert} from 'react-native';
import {APP_STATE} from '../Constants';
import Routes from '../Navigation/Routes';
import {useStoreActions, useStoreState} from '../Store';
import {resetLoginCredentials} from './Keychain';

const AuthStateContext = React.createContext();

export const AuthContextProvider = (props: any) => {
  const {loginUser, setState, checkLogin} = useStoreActions((actions) => ({
    loginUser: actions.auth.loginUser,
    setState: actions.auth.changeAppState,
    checkLogin: actions.auth.checkLogin,
  }));
  const state = useStoreState((store) => store.auth.appstate);

  const _logoutUser = useCallback(async () => {
    const reset = resetLoginCredentials();
    if (reset) {
      // do logout
      setState(APP_STATE.PUBLIC);
    }
  }, [setState]);

  const logout = useCallback(() => {
    Alert.alert(
      'Please comfirm Logout',
      'Are you sure you want to logout from the app',
      [
        {
          type: 'cancel',
          text: 'No, Stay here',
        },
        {
          text: 'Yes, Logout',
          onPress: _logoutUser,
        },
      ],
    );
  }, [_logoutUser]);

  const login = useCallback(
    (reqData) => {
      loginUser(reqData);
    },
    [loginUser],
  );

  // check loggedin on mount
  useEffect(() => {
    state === APP_STATE.UNKNOWN && checkLogin();
  }, [checkLogin, state]);

  return (
    <AuthStateContext.Provider
      value={{
        state,
        logout,
        login,
      }}>
      {props.children}
    </AuthStateContext.Provider>
  );
};

export default AuthStateContext;
