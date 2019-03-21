import React from 'react';
import './SearchResults.css';

const SearchResults = (hero) => (
	<div className="search-box">
		<span className="search-result-icon">
				<img className="hero-icon" src={hero.images.sm}/>
		</span>
    <div className="search-result-name-description-container">
			<span className="search-result-name">
				{hero.name}
			</span>
			<span className="search-result-description">
				{hero.work.occupation}
			</span>
    </div>
	</div>
);

export default SearchResults;
