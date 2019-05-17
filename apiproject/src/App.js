import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import MyBtn from './components/buttons/MyBtn'
import MyForm from './components/myForm/MyForm'

//React Router
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

//REACT ICONS
//https://react-icons.netlify.com/#/

import { FaBeer } from 'react-icons/fa';
import { FaAmbulance } from 'react-icons/fa';
import { MdAddCircle } from 'react-icons/md';
import { TiBookmark } from 'react-icons/ti';
import { GoPerson } from 'react-icons/go'

class App extends Component{

  constructor(props){
    super(props);
    this.state={
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(json => {
          this.setState({
            isLoaded: true,
            items: json,
          })
        })
  }

  render() {


    let { isLoaded, items } = this.state;

    if(!isLoaded){
      return <div> Loading...</div>;
    }
    else {


      return (
          <Router>
          <div className="App">
              <Header pgTitle='Rhythm Music App'/>
              <FaBeer />
              <FaAmbulance />
              <MdAddCircle />
              <TiBookmark />
              <GoPerson />
            <ul>
              {items.map(item =>(
                  <li key={item.id}>
                    NAME: {item.name} || EMAIL: {item.email}
                  </li>
              ))};
            </ul>

          </div>
              <Footer />
          </Router>
      );
    }
}
}

export default App;
