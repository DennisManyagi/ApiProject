import React from 'react'
import './Footer.css'

import { NavLink } from 'react-router-dom'


const Footer = () => {


    return (
        <footer style={styles.footer}>
        <NavLink to="/Pg1">Home</NavLink>
        <NavLink to="/Pg2">Location</NavLink>
        <NavLink to="/Pg3">Contact</NavLink>
        <p> 2019 CS. All rights reserved. </p>
        </footer>
)
}

export default Footer

const styles={

    footer: {

        display: 'flex',
        fontSize: '0.65em',
        padding: '1%',
        justifyContent: 'space-around'
    }


}