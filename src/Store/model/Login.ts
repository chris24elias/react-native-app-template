import {action, thunk, Action, Thunk, Store} from 'easy-peasy';
import {STATUS} from '../../Constants';
import {APP_STATE} from '../../Constants/index';
import {StoreModel} from '.';
import {getLoginCredentials, setLoginCredentials} from '../../Auth/Keychain';

export interface LoginModel {
  appstate: string;
  changeAppState: Action<LoginModel, string>;
  checkLogin: Thunk<LoginModel, any, any, StoreModel, any>;
  loginUser: Thunk<
    LoginModel,
    {username: string; password: string},
    any,
    StoreModel,
    any
  >;
  status: string;
  updateStatus: Action<LoginModel, string>;
}

const LoginModel: LoginModel = {
  appstate: APP_STATE.UNKNOWN,
  changeAppState: action((state, payload) => {
    state.appstate = payload;
  }),
  loginUser: thunk(async (actions, payload, {dispatch}) => {
    if (!payload.username || !payload.password) {
      return;
    }
    actions.updateStatus(STATUS.FETCHING);

    let response = await setLoginCredentials(
      payload.username,
      payload.password,
    );

    //mocking api
    setTimeout(() => {
      actions.updateStatus(response.status ? STATUS.SUCCESS : STATUS.FAILED);
      if (!response.status) {
        console.warn(response.error);
      } else {
        actions.changeAppState(APP_STATE.PRIVATE);
      }
    }, 1000);
  }),
  checkLogin: thunk(async (actions, payload, {dispatch, injections}) => {
    const credentials = await getLoginCredentials();
    if (credentials) {
      actions.changeAppState(APP_STATE.PRIVATE);
    } else {
      actions.changeAppState(APP_STATE.PUBLIC);
    }
  }),
  status: STATUS.NOT_STARTED,
  updateStatus: action((state, status) => {
    state.status = status;
  }),
};

export default LoginModel;
