import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/Navigation/Navigation';
import ReduxStore from './src/Store/ReduxStore';
import ThemeContext from './src/Theme/index';

const App = () => {
  return (
    <ReduxStore>
      <ThemeContext>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </ThemeContext>
    </ReduxStore>
  );
};

export default App;
