import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import Header from './Header';
import About from './About';
import Work from './Work';
import Blog from './Blog';



class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Header/>

    )

  }
}

export default App;
