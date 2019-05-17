import React from 'react'
import MyBtn from '../buttons/MyBtn'

const MyForm = props => {

    return (
        <form
            style={styles.myForm}
            onSubmit={props.addName}>
                <input
                    style={styles.input}
                    placeholder="Name" />
                <input type='text'
                      style={styles.input}
                      name="gName"
                      value={props.gName}
                      onChange={props.changeMeMan}
                      placeholder="How's your day going?" />
                 <p>Status update: {props.myInput}</p>
                 <MyBtn btnText="Add" />
        </form>
    )
}

export default MyForm

const styles= {

    myForm: {
        margin: '1%',
        padding: '1%',
        backgroundColor: 'rgba(163,173,194,0.5)',
        color: 'rgb(163,173,194'

    }
}