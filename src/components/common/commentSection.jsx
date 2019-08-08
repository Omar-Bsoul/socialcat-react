import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Comment from './comment';

const CommentSection = props => {
  const { comments } = props;

  return (
    <List>
      <ListItem>
        {comments.map(comment => (
          <Comment comment={comment} />
        ))}
      </ListItem>
    </List>
  );
};

export default CommentSection;
