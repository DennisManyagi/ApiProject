//import React, { Component } from 'react
import React from 'react'

const ListItem = props => {

    return(
        <ul>
            <li key={props.id} style={styles.list}>
            <span>{props.val.gName}</span>
            <span>{props.val.gPrice}</span>
            <button onClick={props.delMe}>Delete</button>
            </li>
        </ul>
    )
}

export default ListItem


const styles={



    list: {

        padding: '0.5%',
        marginTop: '0.5%',
        //color: 'rgb(163,173,194)',
        //margin: '5%',
        fontSize: '1.25em',
        fontWeight: 'bold',
        cursor: 'pointer',
        //borderRadius: '10%'

    }
}