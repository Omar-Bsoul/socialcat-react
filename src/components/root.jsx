import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Fade from '@material-ui/core/Fade';
import ToggleOn from '@material-ui/icons/ToggleOn';
import ToggleOff from '@material-ui/icons/ToggleOff';

import SocialAppBar from './common/socialAppBar';
import Post from './common/post';

const useStyles = makeStyles(theme => ({
  app: { textAlign: 'center' },
  appHeader: {
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
  const [visible, setVisible] = useState(false);

  const handleTogglingVisibility = () => setVisible(!visible);

  return (
    <div className={classes.app}>
      <SocialAppBar />
      <header className={classes.appHeader}>
        <Post />
        <Post />
        <Post />
        <Post />
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
      </header>
    </div>
  );
};

export default Root;
