import React from 'react'
import MyBtn from '../buttons/MyBtn'

const Search = props => {
    return (
        <form
        style={styles.searchForm}
        onSubmit={props.searchMe} id="search">
            <input
            style={styles.input}
            placeholder="Search..." />
                <MyBtn btnText="Search" />
        </form>

    )

}

export default Search

const styles= {

    searchForm: {



    }
}