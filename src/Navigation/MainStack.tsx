import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from './Routes';
import HomeScreen from '../Screens/Home';
import Tabs from './Tabs';

const Stack = createStackNavigator();

export default (props) => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName={Routes.HOME_TABS}>
      <Stack.Screen name={Routes.HOME_TABS} component={Tabs} />
    </Stack.Navigator>
  );
};
