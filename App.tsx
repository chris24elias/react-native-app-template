import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/Navigation/Navigation';
import ReduxStore from './src/Store/ReduxStore';
import UIKitten from './src/UIKitten/index';
import ThemeContext from './src/Theme/ThemeContext';

const App = () => {
  return (
    <ReduxStore>
      <ThemeContext>
        <UIKitten>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </UIKitten>
      </ThemeContext>
    </ReduxStore>
  );
};

export default App;
