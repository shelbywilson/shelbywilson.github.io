import React from 'react';

class PatternBuilderControls extends React.Component {
	constructor(props) {
		super(props);

		this.reset = this.props.onReset.bind(this);
	}
	render() {
		return (
			<div className='pattern-builder-controls'>
				<div>
					<button type='button' className='pattern-builder-controls-reset' onMouseUp={this.reset}>
						reset
						&nbsp;
						<span className='symbol-refresh'>&#x21bb;</span>
					</button>
				</div>
			</div>
		)
	}
}

export default PatternBuilderControls;