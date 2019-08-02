import React from 'react';
import App from './App';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { green, purple } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green
  },
  status: {
    danger: 'orange'
  }
});

const Root = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <App />
      </React.Fragment>
    </MuiThemeProvider>
  );
};

export default Root;
