import React, { useState } from 'react';

// MUI Stuff
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
//import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  container: {
    margin: '80px auto 0 auto',
    height: '100%',
    width: '100%'
  },
  button: {
    marginTop: 20,
    position: 'relative'
  },

  form: {
    textAlign: 'center'
  },
  image: {
    margin: '20px auto 20px auto'
  },
  pageTitle: {
    margin: '10px auto 10px auto'
  },
  textField: {
    margin: '10px auto 10px auto'
  }
}));
const Login = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item sm />
      <Grid item sm>
        <div className={classes.container}>
          <img />
          <Typography variant='h2'>Login</Typography>
          <form noValidate>
            <TextField
              className={classes.textField}
              id='email'
              name='email'
              type='email'
              label='Email'
              fullWidth
            />
            <TextField
              className={classes.textField}
              id='password'
              name='password'
              type='password'
              label='Password'
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
            <small>dont have an account ? sign up </small>
          </form>
        </div>
      </Grid>
      <Grid item sm />
    </Grid>
  );
};

export default Login;
