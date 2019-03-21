import React, { Component } from 'react';
import Navbar from "./Navbar/Navbar";
import Body from "./Body/Body";
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <div className="section">
          <Navbar/>
        </div>
          <Body />
      </div>
    );
  }
}

export default App;
