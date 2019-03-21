import React, { Component } from 'react';
import './NoResults.css';

class NoResults extends Component {
	render(){
		console.log('what are props', this.props)
		return(
			<div className="no-results-box">
			<div>
				Oh No!
			</div>
			<div>
				No results were found for {this.props.query}
			</div>
		</div>
		)
	}
};

export default NoResults;
