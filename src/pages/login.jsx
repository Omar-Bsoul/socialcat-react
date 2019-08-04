import React, { useState, Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const Login = props => {
  const classes = useStyles();

  return (
<<<<<<< HEAD
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
=======
    <Fragment>
      <Typography className={classes.typography} variant="h2">
        Login
      </Typography>
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
>>>>>>> e6cf226f928bdee911d04fa85bb6ddd93cbb0a6f
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
<<<<<<< HEAD
          className={classes.textField}
          name='password'
          type='password'
          label='Password'
          margin='normal'
          variant='outlined'
=======
          variant="outlined"
          margin="normal"
          required
>>>>>>> e6cf226f928bdee911d04fa85bb6ddd93cbb0a6f
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
<<<<<<< HEAD
        <Button className={classes.button} variant='contained' color='primary'>
          Login
        </Button>
        <Typography className={classes.signup}>
          dont have an account? sign up
        </Typography>
=======
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Login
        </Button>
        <Typography className={classes.typography}>dont have an account? sign up</Typography>
>>>>>>> e6cf226f928bdee911d04fa85bb6ddd93cbb0a6f
      </form>
    </Fragment>
  );
};

export default Login;
