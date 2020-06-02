export interface Theme {
  key: string;
  Primary: Palette;
  Secondary: Palette;
  Error: Palette;
  Warning: Palette;
  Info: Palette;
  Success: Palette;
}

interface Palette {
  light: string;
  main: string;
  dark: string;
}

export const themes: Theme[] = [
  {
    key: 'MAASTRICHT BLUE',
    Primary: {
      light: '#a6d4fa',
      main: '#90caf9',
      dark: '#648dae',
    },
    Secondary: {
      light: '#f6a5c0',
      main: '#f48fb1',
      dark: '#aa647b',
    },
    Error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
    },
    Warning: {
      light: '#ffb74d',
      main: '#ff9800',
      dark: '#f57c00',
    },
    Info: {
      light: '#64b5f6',
      main: '#2196f3',
      dark: '#1976d2',
    },
    Success: {
      light: '#81c784',
      main: '#4caf50',
      dark: '#388e3c',
    },
  },
  {
    key: 'SECOND THEME',
    Primary: {
      light: '#a6d4fa',
      main: '#7d5a5a',
      dark: '#648dae',
    },
    Secondary: {
      light: '#faf2f2',
      main: '#f1d1d1',
      dark: '#aa647b',
    },
    Error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
    },
    Warning: {
      light: '#ffb74d',
      main: '#ff9800',
      dark: '#f57c00',
    },
    Info: {
      light: '#64b5f6',
      main: '#2196f3',
      dark: '#1976d2',
    },
    Success: {
      light: '#81c784',
      main: '#4caf50',
      dark: '#388e3c',
    },
  },
];
