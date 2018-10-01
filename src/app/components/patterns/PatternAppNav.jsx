import React from 'react';

import PatternAppAbout from './PatternAppAbout.jsx';

class PatternAppNav extends React.Component {
	constructor(props) {	
		super(props);

		this.state = {
			isModalDisplay: false
		}

		this.toggleModal = this.toggleModal.bind(this);
	}
	toggleModal() {
		this.setState({
			isModalDisplay: !this.state.isModalDisplay
		})
	}
	render() {
		return (
			<span>
				<header className='pattern-app-nav'>
					<nav>
						<a className='pattern-app-nav-link pattern-app-nav-home' href='/' aria-label='Home'>
							<div className='pattern-app-nav-home-icon'></div>
						</a>
						<ul style={{height: this.state.isModalDisplay ? 0 : '5rem'}}>
							<li>
								<a className='pattern-app-nav-link' href='/patterns' aria-label='Home'>
									1
								</a>
							</li>
							<li>
								<a className='pattern-app-nav-link' href='/patterns/builder' aria-label='Home'>
									2
								</a>
							</li>
						</ul>
					</nav>
					{this.state.isModalDisplay ? 
						<button className='pattern-app-nav-link' type='button' aria-label='Close info' onMouseUp={this.toggleModal}>
							<span className='pattern-app-about-close'>&times;</span>
						</button>
						:
						<button className='pattern-app-nav-link' type='button' aria-label='Open info' onMouseUp={this.toggleModal}>
							<span className='pattern-app-nav-info'>i</span>
						</button>
					} 
				</header>

				<PatternAppAbout isModalDisplay={this.state.isModalDisplay}
					onToggle={this.toggleModal} />
			</span>
		)
	}
}

export default PatternAppNav;