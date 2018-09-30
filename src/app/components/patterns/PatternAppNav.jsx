import React from 'react';

class PatternAppNav extends React.Component {
	render() {
		return (
			<div className='pattern-app-nav'>
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
			</div>
		)
	}
}

export default PatternAppNav;