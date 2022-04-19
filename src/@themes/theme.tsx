import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { red } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';

export const muiCache = createCache({
  key: 'mui',
  prepend: true,
});

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#81c784',
    },
    error: {
      main: red.A400,
    },
  },
});

const AppThemeProvider = ({ children }: { children?: React.ReactNode }) => {
  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default AppThemeProvider;
