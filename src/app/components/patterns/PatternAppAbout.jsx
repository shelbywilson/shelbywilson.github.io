import React from 'react';

import util from './../common/site-data/util.js';
import Modal from './../common/modal/Modal.jsx';

class PatternAppAbout extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			modalDisplay: false
		}
		this.toggle = this.toggle.bind(this);
		this.content = util.getContent('en').patterns;
	}
	toggle() {
		this.setState({
			modalDisplay: !this.state.modalDisplay
		})
	}
	render() {
		return (
			<div className='pattern-app-about'>
				<button type='button' onMouseUp={this.toggle}>
					i
				</button>
				<Modal onClose={this.toggle}
					display={this.state.modalDisplay} 
					customClass='pattern-app-about-modal'>
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
				</Modal>
			</div>
		)
	}
}

export default PatternAppAbout;