import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/Navigation/Navigation';
import ReduxStore from './src/Store/ReduxStore';
import UIKitten from './src/UIKitten/index';
import ThemeContext from './src/Theme/ThemeContext';
import {AuthContextProvider} from './src/Auth/AuthContext';
import {LocaleContextProvider} from './src/i18n/LocaleContext';

const App = () => {
  return (
    <LocaleContextProvider>
      <ReduxStore>
        <AuthContextProvider>
          <ThemeContext>
            <UIKitten>
              <NavigationContainer>
                <Navigation />
              </NavigationContainer>
            </UIKitten>
          </ThemeContext>
        </AuthContextProvider>
      </ReduxStore>
    </LocaleContextProvider>
  );
};

export default App;
