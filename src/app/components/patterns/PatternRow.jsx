import React from 'react';

class PatternRow extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<tr className={'patterns-item-row'}>
				{this.props.rowNum &&
					<td className='patterns-item-cell'>
						{this.props.rowNum}
					</td>
				}
				{this.props.row.map(function (isChecked) {
					return (
						<td className={'patterns-item-cell' + (isChecked ? ' checked' : ' not-checked')}>
						</td>
					)
				})}
			</tr>	
		)
	}
}

export default PatternRow;