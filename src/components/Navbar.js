import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Logo from '../../public/images/';

function Navbar() {
	return (
		<>
			<nav className="navbar">
				<div className="navbar-container">
					<Link to="/" className="navbar-logo">
						<img src="/images/logoipsum-logo-8.svg" alt="logo" />
					</Link>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
