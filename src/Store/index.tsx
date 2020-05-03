import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-community/async-storage';
import {createStore, createTypedHooks, action} from 'easy-peasy';
import model, {StoreModel} from './model';
import {composeWithDevTools} from 'remote-redux-devtools';
import logger from 'redux-logger';
import Reactotron from '../../ReactotronConfig';

let devTools = composeWithDevTools({
  name: 'SocialApp',
  realtime: true,
  injectserver: 'react-native',
  trace: true,
});

const {useStoreActions, useStoreDispatch, useStoreState} = createTypedHooks<
  StoreModel
>();

export {useStoreActions, useStoreDispatch, useStoreState};
let storeEnhancers = [];
if (__DEV__) {
  storeEnhancers = [...storeEnhancers, Reactotron.createEnhancer()];
}
let initialState = {};
const store = createStore(model, {
  reducerEnhancer: (reducer) =>
    persistReducer(
      {
        key: 'easypeasystate',
        storage: AsyncStorage,
      },
      reducer,
    ),
  name: 'easystore',
  compose: devTools,
  devTools: true,
  middleware: [logger],
  enhancers: [...storeEnhancers],
});

initialState = store.getState();

export default store;
