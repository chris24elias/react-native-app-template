import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from './Routes';
import HomeScreen from '../Screens/Home';
import {View} from 'react-native';
import SplashScreen from '../SplashScreen';

const Stack = createStackNavigator();

let fakeApiCallWithoutBadNetwork = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

const Navigation = () => {
  return (
    <View style={{flex: 1}}>
      <SplashScreen onLoad={() => fakeApiCallWithoutBadNetwork(1500)} />
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name={Routes.HOME_SCREEN} component={HomeScreen} />
      </Stack.Navigator>
    </View>
  );
};

export default Navigation;
