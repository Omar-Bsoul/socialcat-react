import React from 'react';

import Typography from '@material-ui/core/Typography';

const Comment = props => {
  const { comment } = props;
  return <Typography>{comment}</Typography>;
};

export default Comment;
