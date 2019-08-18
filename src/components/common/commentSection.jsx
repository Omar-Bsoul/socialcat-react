import React from 'react';

import List from '@material-ui/core/List';

import Comment from './comment';

const CommentSection = props => {
  const { comments } = props;

  return (
    <List>
      {comments.map(comment => (
        <Comment comment={comment} />
      ))}
    </List>
  );
};

export default CommentSection;
