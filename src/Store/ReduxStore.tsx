import React from 'react';
import {StoreProvider} from 'easy-peasy';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import {ActivityIndicator} from 'react-native';
import store from '.';

interface Props {
  children: any;
}

const persistor = persistStore(store);

const ReduxStore = ({children}: Props) => {
  return (
    <PersistGate
      loading={
        <ActivityIndicator
          style={{flex: 1, alignSelf: 'center'}}
          size="large"
        />
      }
      persistor={persistor}>
      <StoreProvider store={store}>{children}</StoreProvider>
    </PersistGate>
  );
};

export default ReduxStore;
