import React from 'react';
import logo from '../Assets/logo.svg';
import hamburgerLogo from '../Assets/hamburgerLogo.svg';
import './Navbar.css';

const Navbar = () => (
	<div>
		<nav>
			<div className="small-nav">
				<img className="small-hamburger-logo" alt="mobile-view-hamburger" src={hamburgerLogo}/>
				<img className="small-marvel-logo" alt="small-marvel-logo" src={logo}/>
			</div>
		</nav>
	</div>
);

export default Navbar;


