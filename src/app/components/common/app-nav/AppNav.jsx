import React from 'react';
import PropTypes from 'prop-types';

import PatternAppAbout from './../../patterns/PatternAppAbout.jsx';

class Nav extends React.Component {
	constructor(props) {	
		super(props);

		const hash = window.location.hash.replace(/#/g, '');

		this.state = {
			isModalDisplay: hash === 'about'
		}

		this.toggleModal = this.toggleModal.bind(this);
	}
	toggleModal() {
		this.setState({
			isModalDisplay: !this.state.isModalDisplay
		})
	}
	render() {
		const {
			links,
			app
		} = this.props;
		return (
			<span>
				<header className='app-nav'>
					<nav>
						<a className='app-nav-link app-nav-home' href='/' aria-label='Home'>
							<div className='app-nav-home-icon'></div>
						</a>
						<ul style={{height: this.state.isModalDisplay ? 0 : (links.length * 2.5) + 'rem'}}>
							{links.map(function(link, i) {
								return (
									<li key={i}>
										<a className='app-nav-link' href={link.href} aria-label={link.label}>
											{i + 1}
										</a>
									</li>
								)
							})}
						</ul>
					</nav>
					{this.state.isModalDisplay ? 
						<button className='app-nav-link' type='button' aria-label='Close info' onMouseUp={this.toggleModal}>
							<span className='app-nav-info-close'>&times;</span>
						</button>
						:
						<button className='app-nav-link' type='button' aria-label='Open info' onMouseUp={this.toggleModal}>
							<span className='app-nav-info'>i</span>
						</button>
					} 
				</header>

				{app === 'patterns'?
					<PatternAppAbout isModalDisplay={this.state.isModalDisplay}
						onToggle={this.toggleModal} />
					:
					null
				}
			</span>
		)
	}
}

Nav.propTypes = {
	links: PropTypes.arrayOf(PropTypes.object)
}

export default Nav;