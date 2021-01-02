import React from 'react';

class PatternSection extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='pattern-item-section'>				
				<h5 className='pattern-item-section-label'>
					{this.props.label}
				</h5>
				{this.props.children}
			</div>
		)
	}
}

export default PatternSection;