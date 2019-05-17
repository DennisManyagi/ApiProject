import React from 'react';
import Header from '../components/header/Header'
import NavList from '../components/NavList'
import MyCard from '../components/MyCard'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PictureOne from '../images/im1.jpeg';
import Random from '../components/Random';


const styles = theme => ({

    root: {

        flexGrow: 1,
        padding: 20,


    },

    paper: {

        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },


});


function userProfile() {
    fetch('https://randomuser.me/api/?results=10')
        .then(response => response.json())
        .then( data => console.log(data));
}


function Dashboard(props) {

    const {classes} = props;




    return (
        <div>
            <NavList />
            <Random />
                <div>
                    <Grid container spacing={24}>
                        <Grid item xs={3}>
                            <Paper>POSTS<img src={PictureOne}></img></Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper>SAVED<img src={PictureOne}></img></Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper>TAGGED<img src={PictureOne}></img></Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <MyCard />
                        </Grid>
                    </Grid>
        </div>
    </div>
    )
}



export default Dashboard

