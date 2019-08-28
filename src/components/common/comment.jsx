import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import formatDate from '../../helpers/formatDate';

const useStyles = makeStyles(theme => ({
  root: {
    width: '85vh',
    backgroundColor: theme.palette.background.paper
  },
  cmnt_head: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingRight: '16px'
  }
}));

const Comment = props => {
  const { id, user, createdAt, text } = props;
  const classes = useStyles();

  return (
    <ListItem alignItems="flex-start" className={classes.root} key={id}>
      <ListItemAvatar>
        <Avatar alt="user" src={user.picture} />
      </ListItemAvatar>
      <ListItemText
        primary={
          <div className={classes.cmnt_head}>
            <span>{user.fullName}</span>
            <span className={classes.inline}>{formatDate(createdAt)}</span>
          </div>
        }
        secondary={text}
      />
    </ListItem>
  );
};

export default Comment;
