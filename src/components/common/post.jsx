import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CommentIcon from '@material-ui/icons/Comment';

import { red } from '@material-ui/core/colors';

import CommentSection from './commentSection';

const useStyles = makeStyles(theme => ({
  card: {
    width: '100vh',
    margin: theme.spacing(1)
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function Post(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  let { limit } = props;
  limit = parseInt(limit || '100');

  const content = `This impressive paella is a perfect party dish and a fun meal to cook together with your
  guests. Add 1 cup of frozen peas along with the mussels, if you like.`;
  const comments = [
    {
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore rerum ea veritatis repellat provident ducimus autem exercitationem dicta alias deleniti rem molestiae ipsam, et blanditiis! Delectus tempora dolorem nulla fuga?',
      user: { fullName: 'Omar Bsoul' }
    },
    {
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore rerum ea veritatis repellat provident ducimus autem exercitationem dicta alias deleniti rem molestiae ipsam, et blanditiis! Delectus tempora dolorem nulla fuga?',
      user: { fullName: 'Mossab Alhariri' }
    },
    {
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore rerum ea veritatis repellat provident ducimus autem exercitationem dicta alias deleniti rem molestiae ipsam, et blanditiis! Delectus tempora dolorem nulla fuga?',
      user: { fullName: 'Omar Bsoul' }
    }
  ];

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <React.Fragment>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Omar Bsoul"
          subheader="September 14, 2016"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {content}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="comments"
          >
            <CommentIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      <Collapse in={expanded}>
        <Paper>
          <CommentSection comments={comments} />
        </Paper>
      </Collapse>
    </React.Fragment>
  );
}
