import {useContext} from 'react';
import {ThemeContext} from './ThemeContext';
import {Theme} from './themes';

interface ThemeContext {
  theme: Theme;
  themes: Theme[];
  setTheme: (id: string) => void;
}

const useTheme = () => {
  let theme: ThemeContext = useContext(ThemeContext);
  return theme;
};

export default useTheme;
