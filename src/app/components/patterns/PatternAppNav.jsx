import React from 'react';

import AppNav from './../common/app-nav/AppNav.jsx';

const links = [
	{
		href: '/patterns',
		label: 'Patterns main'
	},
	{
		href: '/patterns/builder',
		label: 'Builder'
	}
];

class PatternAppNav extends React.Component {
	render() {
		return (
			<span className='pattern-app-nav'>
				<AppNav links={links}
					app='patterns' />
			</span>
		)
	}
}

export default PatternAppNav;