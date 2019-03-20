import React, { Component } from 'react'
import './Search.css';
import axios from 'axios'

const API_URL = 'http://api.musicgraph.com/api/v2/artist/suggest'

class Search extends Component {
  state = {
    query: '',
    results: []
  }

  getInfo = (query) => {
    axios.get(`http://localhost:1337/superheroes?name_like=${query}`)
      .then(({ data }) => {
          debugger;
        this.setState({
          results: data                           
        })
      })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo(this.state.query)
        }
      } 
    })
  }

  render() {
    return (
      <form>
        <input
          placeholder="Search..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <p>{this.state.query}</p>
      </form>
    )
  }
}

export default Search