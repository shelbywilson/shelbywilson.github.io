import React from 'react';
import Nav from './Nav.jsx';

function Header() {
  	return (
		<header>
			<a href='/'>
				<h1>
					west south east
				</h1>
			</a>
			<Nav />
		</header>
  	)
}

export default Header;