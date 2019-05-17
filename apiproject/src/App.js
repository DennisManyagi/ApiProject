import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import MyBtn from './components/buttons/MyBtn'
import MyForm from './components/myForm/MyForm'
import Search from './components/search/Search'
import Main from './components/Main'


// import SearchList from './components/search/SearchList'
import MyModal from './components/MyModal'
import ResponsiveModal from './components/ResponsiveModal'


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

function searchMe(search){
    return function(searchFirstName){

//includes() method determines whether one string may be found within another string, returning true or false as appropriate
        return searchFirstName.fname.toLowerCase().includes(search.toLowerCase()) || !search



    }
}

class App extends Component{

  constructor(props){
    super(props);
    this.state={
      items: [],
      myInput: '',
      search: '',
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

    changeMeMan = e => {

        this.setState({myInput: e.target.value})
    }

    searchStudents = e =>{
        this.setState({search: e.target.value})
    }

  render() {


    let { isLoaded, items } = this.state;

    if(!isLoaded){
      return <div> Loading...</div>;
    }
    else {


      return (
          <Router>
          <div style={styles.container}>
              <div style={styles.left}>
                  <Header pgTitle='Rhythm Music App'/>
              </div>
              <div style={styles.center}>
              <FaBeer />
              <FaAmbulance />
              <MdAddCircle />
              <TiBookmark />
              <GoPerson />
              <Search searchMe={this.searchMe} />
              <Main/>
            <ul>
              {items.map(item =>(
                  <li key={item.id}>
                    NAME: {item.name} || EMAIL: {item.email}
                  </li>
              ))};
            </ul>
              <MyForm
                  changeMeMan ={this.changeMeMan}
                  myInput={this.state.myInput}
              />
              </div>
              <div style={styles.right}>
              <MyModal />
              <ResponsiveModal />
              </div>


          </div>
              <Footer />
          </Router>
      );
    }
}
}

export default App;

const styles = {

    container: {

        display: 'flex',
        flexWrap: 'wrap'

    },

    left: {

        flex: '1',
        padding: '20px',
        background: '#ccc',
        order: '1'
    },

    center: {

        flex: '2',
        order: '2',
        background: '#eee',
        padding: '20px'
    },

    right: {

        flex: '1',
        padding: '20px',
        justifyContent: 'space-around',
        order: '3'

    }
}
