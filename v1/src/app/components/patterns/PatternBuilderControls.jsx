import React from 'react';

class PatternBuilderControls extends React.Component {
	render() {
		const {
			onReset,
			patternNumber
		} = this.props;
		return (
			<div className='pattern-builder-controls'>
				<div>
					{patternNumber ?
						<a className='pattern-builder-controls-action' href={'/patterns#' + patternNumber[0] + (patternNumber[1] ? '.' + patternNumber[1] : '')}>
							&larr;
							&nbsp;
							back
						</a>
						:
						null
					}
					<button type='button' className='pattern-builder-controls-action' onMouseUp={onReset}>
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