import React from 'react';

import PatternAppAbout from './PatternAppAbout.jsx';

class PatternAppNav extends React.Component {
	render() {
		return (
			<header className='pattern-app-nav'>
				<nav>
					<a href='/' aria-label='Home'>
						&#8886;
					</a>
					<ul>
						<li>
							<a href='/patterns' aria-label='Home'>
								1
							</a>
						</li>
						<li>
							<a href='/patterns/builder' aria-label='Home'>
								2
							</a>
						</li>
					</ul>
				</nav>
				<PatternAppAbout />
			</header>
		)
	}
}

export default PatternAppNav;