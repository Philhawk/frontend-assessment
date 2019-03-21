import React, { Component } from 'react';
import './NoResults.css';

class NoResults extends Component {
	render(){
		return(
			<div className="no-results-box">
			<div className="no-results-heading">
				Oh No!
			</div>
			<div className="no-results-text">
				No results were found for "{this.props.query}""
			</div>
		</div>
		)
	}
};

export default NoResults;
