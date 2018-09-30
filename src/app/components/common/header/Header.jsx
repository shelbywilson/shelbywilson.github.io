import React from 'react';
import Nav from './Nav.jsx';

function Header() {
  	return (
		<header>
			<nav>
				<a href='/' aria-label='Home'>
					home
				</a>
				<ul>
					<li>
						<a href='/patterns' aria-label='Home'>
							1
						</a>
					</li>
					<li>
						<a href='/pattern/builder' aria-label='Home'>
							2
						</a>
					</li>
				</ul>
			</nav>
			<button type='button'>
				i
			</button>
		</header>
  	)
}

export default Header;