import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  root: {
    width: '85vh',
    backgroundColor: theme.palette.background.paper
  }
}));

const Comment = props => {
  const { comment } = props;
  const classes = useStyles();

  return (
    <ListItem alignItems="flex-start" className={classes.root}>
      <ListItemAvatar>
        <Avatar
          alt="Cindy Baker"
          src={`https://material-ui.com/static/images/avatar/${Math.floor(Math.random() * 4) +
            1}.jpg`}
        />
      </ListItemAvatar>
      <ListItemText primary={comment.user.fullName} secondary={comment.text} />
    </ListItem>
  );
};

export default Comment;
