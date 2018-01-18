import React from 'react';

import Modal from './../modal/Modal.jsx';

class ToggleAbout extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isFocused: false
		}

		this.toggleAbout = this.toggleAbout.bind(this);
	}
	toggleAbout() {
		const newState = !this.state.isFocused;
		this.setState({
			isFocused: newState
		});

		if (newState) {
			this.props.onUpdate();
		}
	}
	render() {
		return (
			<span>
				<button type='button' className='toggle-about btn-transparent' onMouseUp={this.toggleAbout}>
					{'*'}
				</button>
				<Modal onClose={this.toggleAbout}
					display={this.state.isFocused}>
					{this.props.children}
				</Modal>
			</span>
		)
	}
}

export default ToggleAbout;