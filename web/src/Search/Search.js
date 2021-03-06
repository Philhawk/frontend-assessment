import React, { Component } from 'react'
import './Search.css';
import axios from 'axios'
import spinner from '../Assets/spinner.svg'
import SearchResults from '../SearchResults/SearchResults'
import NoResults from '../NoResults/NoResults'

class Search extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      results: [],
      showSpinner: false,
      showNoResults: false
    }

    this.selectHero = this.selectHero.bind(this);
  }

  selectHero = (hero) => {
    this.setState({
      results: [],
      showNoResults: false,
      showSpinner: false,
      query: hero
    })
  }

  locationSearch = (query) => {
    this.setState({showSpinner: false, results: []})
    axios.get(`http://localhost:1337/superheroes?base_like=${query}`)
      .then(({ data }) => {
        this.setState({
          results: data,      
          showSpinner: false                     
        })
      }).catch((err) => {
        console.error(err)
      })
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
        console.error(err)
      })
  }

  handleInputChange = () => {
    let shouldSpinnerBeSet = this.state.results.length !== 1 ? true : false;
    this.setState({
      showSpinner: shouldSpinnerBeSet,
      query: this.search.value
    }, () => {
      if (this.state.query.length > 4 && this.state.results.length === 0) {
        // Keep typing but no results
        this.locationSearch(this.state.query)
        this.setState({showNoResults: true, showSpinner: false})
      }
      else if (this.state.query && this.state.query.length > 1) {
        // Normal procedure, result expected
        this.setState({showNoResults: false})
        this.getInfo(this.state.query, false)
      } else if (this.state.query === '') {
        // When query is deleted (i.e person starts again)
        this.setState({showSpinner: false, showNoResults: false})
      } else if (this.state.results.length === 0) {
        this.setState({results: [], showSpinner: false, showNoResults: true})
      } 
    })
  }

  render() {
    return (
      <form>
				<span>
          {/* I had the placeholder originally as just 'Search..', but really felt the UI was best served being declarative. I am only searching by name and location, so thought it was best if the user knew this */}
					<input
						placeholder="Search by name/location.."
						ref={input => this.search = input}
						onChange={this.handleInputChange}
						className="search-field"
            value={this.state.query}
					/>
          <img style={{display: this.state.showNoResults ? '' : 'none'}} className="spinner" src={spinner}/>
				</span>
				<div style={{display: this.state.showNoResults ? 'none' : ''}} className="search-container">
        {
					this.state.results.length > 0 ? this.state.results.map((row, i) =>
					<div className="search-results">
						<SearchResults selectHero={this.selectHero} hero={row} />
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