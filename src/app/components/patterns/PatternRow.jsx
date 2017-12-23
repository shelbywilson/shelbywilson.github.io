import React from 'react';

class PatternRow extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<tr className={'patterns-row'}>
				{this.props.rowNum &&
					<td>
						{this.props.rowNum}
					</td>
				}
				{this.props.row.map(function (isChecked) {
					return (
						<td className={'patterns-cell' + (isChecked ? ' checked' : '')}>
						</td>
					)
				})}
			</tr>	
		)
	}
}

export default PatternRow;