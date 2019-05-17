import React from 'react'
import './Nav.css'
import MyBtn from '../buttons/MyBtn'

//React Router
import { NavLink } from 'react-router-dom'

const Nav = () => {

    return (

        <nav style={styles.container}>
        <NavLink to="/Playlist"><MyBtn btnText='Playlist' /></NavLink>
        <NavLink to="/Profile"><MyBtn btnText='Profile '/></NavLink>
        <NavLink to="/Contact"><MyBtn btnText='Contact '/></NavLink>
        </nav>

    )
}

export default Nav

const styles = {

    container: {

    }



}