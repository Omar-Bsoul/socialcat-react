import React, { Component } from 'react';

// MUI Stuff

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: '#282c34',
    minWidth: '100vh',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(8px + 2vmin)',
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
  typography: {
    marginBottom: theme.spacing(2)
  }
}));
const Signup = props => {
  const classes = useStyles();
  return (
    <div className={props.className}>
      <img />
      <Typography className={classes.typography} variant='h2'>
        Signup
      </Typography>
      <form className={classes.form} noValidate>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete='fname'
              name='fullName'
              variant='outlined'
              required
              fullWidth
              id='fullName'
              label='Full Name'
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant='outlined'
              required
              fullWidth
              id='handle'
              label='handle'
              name='handle'
              autoComplete='handle'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant='outlined'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant='outlined'
              fullWidth
              required
              name='Password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant='outlined'
              fullWidth
              required
              name='ConsfirmPassword'
              label='Confirm Password'
              type='password'
              id='Confirmpassword'
              autoComplete='current-password'
            />
          </Grid>
        </Grid>
        <Button
          className={classes.button}
          type='submit'
          variant='contained'
          color='primary'
        >
          Signup
        </Button>
        <br />
        <small>already have an account ? login </small>
      </form>
    </div>
  );
};
export default Signup;
