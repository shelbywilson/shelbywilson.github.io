import React from 'react';

import util from './../common/site-data/util.js';
import Modal from './../common/modal/Modal.jsx';

class PatternsAbout extends React.Component {
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
			<div className='pattern-about'>
				<button type='button' className='btn-primary' onMouseUp={this.toggle}>
					<div className='btn-sublabel'>
						{this.content['about-description']}
					</div>
					{this.content['about-name']}
				</button>
				<Modal onClose={this.toggle}
					display={this.state.modalDisplay} >
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
						<a className='psuedo-btn-primary' href='/files/weaving_patterns.pdf' target='_blank'>
							view original
						</a>
					</p>
				</Modal>
			</div>
		)
	}
}

export default PatternsAbout;