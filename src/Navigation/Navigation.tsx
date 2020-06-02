import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from './Routes';
import {View} from 'react-native';
import SplashScreen from '../SplashScreen';
import LaunchScreen from '../Screens/Launch';
// Screens Objects
import LoginStack from './LoginStack';
import MainStack from './MainStack';

import {APP_STATE} from '../Constants';
import useAuth from '../Auth';

const Stack = createStackNavigator();

let fakeApiCallWithoutBadNetwork = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

const Navigation = () => {
  const {state} = useAuth();

  return (
    <View style={{flex: 1}}>
      <SplashScreen onLoad={() => fakeApiCallWithoutBadNetwork(1500)} />

      <Stack.Navigator headerMode="none">
        {state === APP_STATE.PRIVATE ? (
          <Stack.Screen name={Routes.MAIN_APP} component={MainStack} />
        ) : state === APP_STATE.PUBLIC ? (
          <Stack.Screen name={Routes.LOGIN_STACK} component={LoginStack} />
        ) : (
          <Stack.Screen name={Routes.LOADING} component={LaunchScreen} />
        )}
      </Stack.Navigator>
    </View>
  );
};

export default Navigation;
