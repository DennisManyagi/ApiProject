import React from 'react'
import './MyBtn.css'

//Dummy Component
const MyBtn = props => {

    return(
        <button className="prtyBtn" style={styles.myBtn}>
        {props.btnText}
        </button>
    )
}

export default MyBtn


//Smart Component
/*
class MyBtn extends Component {

    render(){

        return(
            <button style={styles.myBtn}>
            <h2 style={styles.h2}>{this.props.btnText}</h2>
        </button>
        )
    }
}

export default MyBtn*/


const styles={

    myBtn: {
        padding: '5%',
        backgroundColor: 'green',
        color: 'white',
        margin: '5%',
        fontSize: '1.25em',
        fontWeight: 'bold',
        cursor: 'pointer',
        borderRadius: '10%'
    }
}