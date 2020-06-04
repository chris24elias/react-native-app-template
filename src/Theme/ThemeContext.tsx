import React, {useContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {themes} from './themes';

const STORAGE_KEY = 'THEME_ID';
export const ThemeContext = React.createContext();

export const ThemeContextProvider = ({defaultTheme = '', children}) => {
  const [themeID, setThemeID] = useState(defaultTheme);
  useEffect(() => {
    (async () => {
      if (!defaultTheme) {
        const storedThemeID = await AsyncStorage.getItem(STORAGE_KEY);
        if (storedThemeID) setThemeID(storedThemeID);
        else setThemeID(themes[0].key);
      }
    })();
  }, []);

  const getTheme = (themeID) => themes.find((theme) => theme.key === themeID);
  const setTheme = (themeID) => {
    AsyncStorage.setItem(STORAGE_KEY, themeID);
    setThemeID(themeID);
  };

  return (
    <ThemeContext.Provider
      value={{
        themes,
        theme: getTheme(themeID),
        setTheme: setTheme,
      }}>
      {!!themeID ? children : null}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
