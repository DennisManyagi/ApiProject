import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Pic from '../../images/im1.jpeg';

const styles = {
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
};

function ImageAvatars(props) {
    const { classes } = props;
    return (
        <Grid container justify="center" alignItems="center">
        <Avatar alt="Remy Sharp" src={Pic} className={classes.avatar} />
    <Avatar alt="Remy Sharp" src={Pic} className={classes.bigAvatar} />
    </Grid>
);
}

ImageAvatars.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);