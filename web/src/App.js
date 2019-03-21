import React, { Component } from 'react';
import Navbar from "./Navbar/Navbar";
import Body from "./Body/Body";
import Search from './Search/Search'
import logo from './Assets/logo.svg';

import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <div className="section">
          <Navbar/>
        </div>
        <div className="section-with-search">
         <div className="large-nav">
				  <img className="fs-marvel-logo" alt="fs-marvel-logo" src={logo}/>
          <span className="fs-search">
            <Search/>
          </span>
          
			  </div>
        </div>
          <Body />
      </div>
    );
  }
}

export default App;
