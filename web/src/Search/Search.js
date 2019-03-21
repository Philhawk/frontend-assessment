import React, { Component } from 'react'
import './Search.css';
import axios from 'axios'
import spinner from '../Assets/spinner.svg'
import SearchResults from '../SearchResults/SearchResults'
import NoResults from '../NoResults/NoResults'

class Search extends Component {
  state = {
    query: '',
    results: [],
    showSpinner: false,
    showNoResults: false
  }

  getInfo = (query) => {
    this.setState({showSpinner: false, results: []})
    axios.get(`http://localhost:1337/superheroes?name_like=${query}`)
      .then(({ data }) => {
        this.setState({
          results: data,      
          showSpinner: false                     
        })
      }).catch((err) => {
        // TODO
      })
  }

  handleInputChange = () => {
    let shouldSpinnerBeSet = this.state.results.length !== 1 ? true : false;
    this.setState({
      showSpinner: shouldSpinnerBeSet,
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        this.getInfo(this.state.query)
      } else if (this.state.query === '') {
        this.setState({showSpinner: false})
      } else if (this.state.results.length === 0) {
        this.setState({results: [], showSpinner: false, showNoResults: true})
      } else {
        console.log('this is results', this.state.results)
        console.log('this is query', this.state.query)
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
          <img style={{display: this.state.showSpinner ? '' : 'none'}} className="spinner" src={spinner}/>
				</span>
				<div className="search-container">
        {
					this.state.results.length > 0 ? this.state.results.map((row, i) =>
					<div className="search-results">
						<SearchResults {...row} />
					</div>
          ) : ''
        }
				</div>
        { this.state.showNoResults ?
          <div className="no-results"> 
            <NoResults query={this.state.query}/> 
          </div> : ''
        }
			</form>
    )
  }
}

export default Search