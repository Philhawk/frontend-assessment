import React, { Component } from 'react'
import './Search.css';
import axios from 'axios'
import SearchResults from '../SearchResults/SearchResults'

class Search extends Component {
  state = {
    query: '',
    results: []
  }

  getInfo = (query) => {
    axios.get(`http://localhost:1337/superheroes?name_like=${query}`)
      .then(({ data }) => {
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
				<span>
					<input
						placeholder="Search.."
						ref={input => this.search = input}
						onChange={this.handleInputChange}
						className="search-field"
					/>
					<div className="loader"/>
				</span>
				<div className="search-container">
        {
					this.state.results ? this.state.results.map((row, i) =>
					<div className="search-results">
						<SearchResults {...row} />
					</div>
					) : ''
				}
				</div>
			</form>
    )
  }
}

export default Search