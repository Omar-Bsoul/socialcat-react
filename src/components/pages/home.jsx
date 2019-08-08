import React from 'react';

import List from '@material-ui/core/List';

import Post from '../common/post';

const Home = props => {
  return (
    <List className={props.className}>
      <Post limit="50" />
      <Post limit="50" />
      <Post limit="50" />
      <Post limit="50" />
      <Post limit="50" />
    </List>
  );
};

export default Home;
