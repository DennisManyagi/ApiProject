import React, { Component } from 'react'

class SearchList extends Component {


    render(){

        return (
            <li key={this.props.id}>
                <span>{this.props.val.fname}</span>
                <span>{this.props.val.lname}</span>
                <span>{this.props.val.phone}</span>
                <span>{this.props.val.degree}</span>
            </li>
        )
    }
}

export default SearchList