import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

import Login from '../pages/login';
import Signup from '../pages/signup';
import SocialAppBar from '../components/common/socialAppBar';
import Profile from './common/profile';

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
    <div className={classes.app}>
      {/*<SocialAppBar />*/}
      <Grid container component='main' className={classes.root}>
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Profile />
          </div>
        </Grid>
      </Grid>
      {/*<header className={classes.appHeader}>
          <Fade in={visible}>
            <p>
              Welcome to{' '}
              <code>
                Social App
                <br />
                <a
                  className={classes.link}
                  href="https://www.thurrott.com/wp-content/uploads/sites/2/2019/04/facebook-fb5.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook Reference
                </a>
              </code>
            </p>
          </Fade>
          <Fab onClick={handleTogglingVisibility} rel="noopener noreferrer">
            {visible ? <ToggleOn /> : <ToggleOff />}
          </Fab>
        </header>*/}
    </div>
  );
};

export default Root;
