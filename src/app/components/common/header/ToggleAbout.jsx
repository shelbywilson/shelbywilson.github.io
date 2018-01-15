import React from 'react';

class ToggleAbout extends React.Component {
	constructor(props) {
		super(props);

		this.toggleAbout = this.props.onToggleAbout.bind(this);
	}
	render() {
		return (
			<button type='btn-transparent' className='toggle-about' onMouseUp={this.toggleAbout}>
				{'*'}
			</button>
		)
	}
}

export default ToggleAbout;