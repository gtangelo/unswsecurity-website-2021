import React from 'react';
import {
  ThemeProvider as Provider,
  createTheme,
  responsiveFontSizes,
} from '@material-ui/core/styles';

const headingFont = 'Nunito Sans';
const bodyFont = 'Nunito Sans';

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1060,
      xl: 1920,
    },
  },
  typography: {
    h1: {
      fontFamily: headingFont,
      fontSize: '4rem',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    h2: {
      fontFamily: headingFont,
      fontSize: '3.2rem',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    h3: {
      fontFamily: headingFont,
      fontSize: '2.6rem',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      marginBottom: '25px',
    },
    h4: {
      fontFamily: headingFont,
      fontSize: '2rem',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      marginBottom: '25px',
    },
    h5: {
      fontFamily: headingFont,
      fontSize: '1.8rem',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      marginBottom: '15px',
    },
    h6: {
      fontFamily: headingFont,
      fontSize: '1.2rem',
      fontWeight: 'bold',
    },
    subtitle1: {
      fontFamily: bodyFont,
      fontSize: '1rem',
      fontWeight: 'bold',
    },
    subtitle2: {
      fontFamily: bodyFont,
      fontSize: '0.9rem',
    },
    body1: {
      fontFamily: bodyFont,
      fontSize: '1.05rem',
      marginBottom: '15px',
      lineHeight: 1.8,
    },
    body2: {
      fontFamily: bodyFont,
      fontSize: '0.85rem',
      marginBottom: '5px',
      lineHeight: 1.6,
    },
  },
});

theme = responsiveFontSizes(theme);

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <Provider theme={theme}>{children}</Provider>;
};

export default ThemeProvider;
