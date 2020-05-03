import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/Navigation/Navigation';
import ReduxStore from './src/Store/ReduxStore';
import ThemeContext from './src/Theme/index';
import RNBootSplash from 'react-native-bootsplash';

const App = () => {
  let init = async (): Promise<any> => {
    // …do multiple async tasks
  };

  useEffect(() => {
    init().finally(() => {
      RNBootSplash.hide({duration: 250});
    });
  }, []);

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
