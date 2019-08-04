import React from 'react';
import Root from './components/root';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { green, teal } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: green,
    type: 'dark'
  },
  status: {
    danger: 'orange'
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*::-webkit-scrollbar': {
          width: '0.64em'
        },
        '*::-webkit-scrollbar-track': {
          '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(0,0,0,.48)',
          outline: '1px solid slategrey'
        }
      }
    }
  }
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <Root />
      </React.Fragment>
    </MuiThemeProvider>
  );
};

export default App;
