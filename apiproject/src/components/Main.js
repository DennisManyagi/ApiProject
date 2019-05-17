import React, { Component } from 'react'

//React Router
import {
    BrowserRouter as Router,
    Route,
    Link


} from 'react-router-dom'

import Playlist from '../pages/Playlist'
import Profile from '../pages/Profile'
import Contact from '../pages/Contact'

class Main extends Component {

    render(){
        return(
            <section className="content main-content">
                <Route exact path='/Playlist' component={Playlist} />
                <Route exact path='/Profile' component={Profile} />
                <Route exact path='/Contact' component={Contact} />
            </section>
            );
    }
}

export default Main