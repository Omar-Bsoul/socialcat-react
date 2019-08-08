import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import SocialAppBar from './common/socialAppBar';
import Home from './pages/home';

const useStyles = makeStyles(theme => ({
  app: { textAlign: 'center' },
  mainContent: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    paddingTop: theme.spacing(12),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: theme.palette.common.white
  },
  link: {
    color: theme.palette.common.white
  }
}));

const Root = () => {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <SocialAppBar />
      <Home className={classes.mainContent} />
    </div>
  );
};

export default Root;
