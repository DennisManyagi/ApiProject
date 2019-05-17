import React from 'react'
import './Header.css'
import Nav from '../nav/Nav'

//ADD IMAGES
import logo from '../../images/im1.jpeg';

const Header = props => {


    return(

        <header style={styles.header}>
        <img src={logo} alt="Logo" style={styles.logo} />
        <h1 style={styles.h1}>{props.pgTitle}</h1>
        <Nav />
        </header>

)
}

export default Header

const styles={

    header: {

    },

    h1: {

        fontSize: '1.25em'
    },

    img: {

        width: 100,
        height: 100
    }


}