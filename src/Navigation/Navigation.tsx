import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from './Routes';
import HomeScreen from '../Screens/Home';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name={Routes.HOME_SCREEN} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;
