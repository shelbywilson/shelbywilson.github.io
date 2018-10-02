import React from 'react';

import AppNav from './../common/app-nav/AppNav.jsx';

const links = [
];

class NewsfeedAppNav extends React.Component {
	render() {
		return (
			<span className='newsfeed-app-nav'>
				<AppNav links={links}
					app='newsfeed' />
			</span>
		)
	}
}

export default NewsfeedAppNav;