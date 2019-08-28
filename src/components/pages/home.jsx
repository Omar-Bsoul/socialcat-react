import React from 'react';

import List from '@material-ui/core/List';

const Home = props => {
  const { children, className } = props;
  return <List className={className}>{children}</List>;
};

export default Home;
