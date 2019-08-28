import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import SocialAppBar from './common/socialAppBar';
import Home from './pages/home';
import Post from './common/post';

import genPost from '../helpers/genPost';

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
  const [posts, setPosts] = useState([]);
  const [loadCount, setLoadCount] = useState(0);

  function incrementLoadCount() {
    setLoadCount(loadCount + 1);
  }

  useEffect(() => {
    const loadedPosts = [];
    for (let i = 0; i < parseInt(Math.random() * 15) + 5; i++) {
      loadedPosts.push(genPost(i));
    }
    setPosts(loadedPosts);
  }, [loadCount]);

  // TODO: the Button to be removed
  return (
    <div className={classes.app}>
      <SocialAppBar />
      <Home className={classes.mainContent}>
        <Button variant="contained" onClick={incrementLoadCount}>
          Reload
        </Button>
        {posts.map(post => (
          <Post {...post} limit="50" key={post.id} />
        ))}
      </Home>
    </div>
  );
};

export default Root;
