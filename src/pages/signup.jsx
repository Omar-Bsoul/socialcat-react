import React, { Component } from 'react';

// MUI Stuff

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
  }
}));
const Signup = props => {
  const classes = useStyles();
  return (
    <div className={props.className}>
      <img />
      <Typography variant='h2'>Signup</Typography>
      <form className={classes.form} noValidate>
        <TextField
          className={classes.textField}
          id='email'
          name='email'
          type='email'
          label='Email'
          variant='outlined'
          margin='normal'
          fullWidth
        />
        <TextField
          className={classes.textField}
          id='userName'
          name='userName'
          type='text'
          label='UserName'
          variant='outlined'
          margin='normal'
          fullWidth
        />
        <TextField
          className={classes.textField}
          id='handle'
          name='handle'
          type='text'
          label='handle'
          variant='outlined'
          margin='normal'
          fullWidth
        />
        <TextField
          className={classes.textField}
          id='password'
          name='password'
          type='password'
          label='Password'
          variant='outlined'
          margin='normal'
          fullWidth
        />
        <TextField
          className={classes.textField}
          id='confirmPassword'
          name='confirmPassword'
          type='password'
          label='confirmPassword'
          variant='outlined'
          margin='normal'
          fullWidth
        />
        <Button
          className={classes.button}
          type='submit'
          variant='contained'
          color='primary'
        >
          Login
        </Button>
        <br />
        <small>already have an account ? login </small>
      </form>
    </div>
  );
};
export default Signup;
