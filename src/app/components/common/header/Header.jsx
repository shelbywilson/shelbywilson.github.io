import React from 'react';

function Header() {
	const pages = [
		{
			href: '/',
			name: 'home'
		},
		{
			href: '/news',
			name: 'news'
		},
		{
			href: '/patterns',
			name: 'weaving'
		}
	];
  	return (
		<header>
			<a href='/'>
				<h1>
					west south east
				</h1>
			</a>
			<nav tabIndex='1'>
				<div className='toggle-nav'>
				</div>
				<ul>
					{pages.map(function (page) {
						return (
							<li key={page.name}>
								<a href={page.href}>
									{page.name}
								</a>
							</li>
						)
					})}
				</ul>
			</nav>
		</header>
  	)
}

export default Header;