import React from 'react';
import $ from 'jquery';

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

class Nav extends React.Component {
	constructor(props) {
		super(props);

		this.show = this.show.bind(this);
	}
	show() {
		$(this.nav).focus();
	}
	render() {
		return (
			<nav tabIndex={1} ref={(el) => this.nav = el}>
				<button type='button' className='btn-transparent toggle-nav' onMouseUp={this.show.bind(this)}>
					<div>
					</div>
				</button>
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
		)
	}
}

export default Nav;