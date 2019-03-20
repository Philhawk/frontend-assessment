import React, { Component } from 'react';
import Navbar from "./Navbar/Navbar";
import Body from "./Body/Body";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

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
