import React from 'react';

import AppNav from './../common/app-nav/AppNav.jsx';
import PatternAppAbout from './PatternAppAbout.jsx';

const links = [
	{
		href: '/patterns',
		label: 'Patterns main'
	},
	{
		href: '/v1/patterns/builder',
		label: 'Builder'
	}
];

class PatternAppNav extends React.Component {
	render() {
		return (
			<AppNav links={links}
				app='patterns'
				activeLink={this.props.activeLink}>

				<PatternAppAbout />
				
			</AppNav>
		)
	}
}

export default PatternAppNav;