import React from 'react';

class PatternItemSection extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='patterns-item-section'>				
				<h5 className='patterns-item-section-label'>
					{this.props.label}
				</h5>
				{this.props.children}
			</div>
		)
	}
}

export default PatternItemSection;