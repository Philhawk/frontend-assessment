import React from 'react';
import Search from '../Search/Search';
import './Body.css'

const Body = () => (
	<div>
		<div className="section-2-with-search">
			<Search/>
		</div>
		<div className="section-2-without-search">
		</div>
	</div>
);

export default Body;
