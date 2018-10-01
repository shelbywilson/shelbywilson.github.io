import React from 'react';

import util from './../common/site-data/util.js';
import Modal from './../common/modal/Modal.jsx';

class PatternAppAbout extends React.Component {
	constructor(props) {
		super(props);

		this.content = util.getContent('en').patterns;
	}
	render() {
		return (
			<Modal onClose={this.props.onToggle}
				display={this.props.isModalDisplay} 
				customClass='pattern-app-about'>
				<div className='container'>
					<h3>
						{this.content['about-name']}
					</h3>
					<h6>
						{this.content['about-dept-rural-econ']}
					</h6>
					<h6>
						{this.content['about-saint-petersburg']}
					</h6>
					<p>
						<a className='pseudo-btn-primary' href={util.getFilePath('weaving_patterns.pdf')} target='_blank'>
							view original
						</a>
					</p>
				</div>
			</Modal>
		)
	}
}

export default PatternAppAbout;