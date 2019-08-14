import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import profilePhoto from '../logo.png';
// MUI
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

// Icons
import LocationOn from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/Link';
import CalendarToday from '@material-ui/icons/CalendarToday';

import Avatar from '@material-ui/core/Avatar';
const useStyles = makeStyles(theme => ({
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  }
}));
const Profile = props => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        component='img'
        alt='profile'
        height='180'
        image={profilePhoto}
        title='Contemplative Reptile'
      />
      <CardHeader
        avatar={
          <Avatar
            alt='profile'
            src={profilePhoto}
            className={classes.bigAvatar}
          >
            R
          </Avatar>
        }
        title='Mossab alyousif'
        subheader='@myyno97'
      />
      <CardContent>
        <Typography variant='body1' gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus.
        </Typography>
        <Divider />
        <LocationOn /> <span> Location </span>
        <LinkIcon /> <span>https://website.com</span>
      </CardContent>
    </Card>
  );
};

export default Profile;

/**
 *
 *
 *
 */
