import React, { Component } from 'react';
import './SearchResults.css';

class SearchResults extends Component {

	render(){
		return(
			<div className="search-box" onClick={() => this.props.selectHero(this.props.hero.name)}>
			<span className="search-result-icon">
					<img className="hero-icon" src={this.props.hero.images.sm}/>
			</span>
			<div className="search-result-name-description-container">
				<span className="search-result-name">
					{this.props.hero.name}
				</span>
				<span className="search-result-description">
					{this.props.hero.work.occupation}
				</span>
			</div>
		</div>
		)
	}
}

export default SearchResults;
