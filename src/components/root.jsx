import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

import Login from '../pages/login';
import Signup from '../pages/signup';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

const Root = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      {/*<SocialAppBar />*/}
      <Grid container component="main" className={classes.root}>
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Login />
            <Signup />
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Root;
