import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from './Routes';
import HomeScreen from '../Screens/Home';

const Stack = createStackNavigator();

export default (props) => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName={Routes.HOME_SCREEN}>
      <Stack.Screen name={Routes.HOME_SCREEN} component={HomeScreen} />
    </Stack.Navigator>
  );
};
