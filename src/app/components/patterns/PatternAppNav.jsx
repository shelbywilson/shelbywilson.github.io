import React from 'react';

import AppNav from './../common/app-nav/AppNav.jsx';
import PatternAppAbout from './PatternAppAbout.jsx';

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
			<AppNav links={links}
				app='patterns'>

				<PatternAppAbout />
				
			</AppNav>
		)
	}
}

export default PatternAppNav;