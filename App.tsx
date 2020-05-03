import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/Navigation/Navigation';
import ReduxStore from './src/Store/ReduxStore';

const App = () => {
  return (
    <ReduxStore>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </ReduxStore>
  );
};

export default App;
