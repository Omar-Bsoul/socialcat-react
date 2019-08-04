import React, { useState } from 'react';

// MUI Stuff
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: '#282c34',
    minWidth: '100vh',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: theme.palette.common.white
  },
  button: {
    marginTop: theme.spacing(4),
    position: 'relative'
  },
  textField: {
    marginTop: theme.spacing(2),
    color: theme.palette.primary.dark
  },
  input: {
    color: theme.palette.secondary.light
  },
  signup: {
    marginTop: theme.spacing(2)
  }
}));
const Login = props => {
  const classes = useStyles();

  return (
    <div className={props.className}>
      <Typography variant='h2'>Login</Typography>
      <form noValidate>
        <TextField
          className={classes.textField}
          name='email'
          type='email'
          label='Email'
          variant='outlined'
          margin='normal'
          fullWidth
        />
        <TextField
          className={classes.textField}
          name='password'
          type='password'
          label='Password'
          margin='normal'
          variant='outlined'
          fullWidth
        />
        <Button className={classes.button} variant='contained' color='primary'>
          Login
        </Button>
        <Typography className={classes.signup}>
          dont have an account? sign up
        </Typography>
      </form>
    </div>
  );
};

export default Login;
