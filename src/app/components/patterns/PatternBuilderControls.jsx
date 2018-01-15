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
					<button type='button' className='btn-primary' onMouseUp={this.reset}>
						Reset
						&nbsp;
						<span className='symbol-refresh'>&#x21bb;</span>
					</button>
				</div>
			</div>
		)
	}
}

export default PatternBuilderControls;