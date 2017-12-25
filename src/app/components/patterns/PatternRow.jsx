import React from 'react';

const cellClasses = ['not-checked', 'checked', 'checked-alt'];

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
				{this.props.row.map(function (cellVal) {
					return (
						<td className={'patterns-item-cell ' + (cellClasses[cellVal])}>
							<div>
							</div>
						</td>
					)
				})}
			</tr>	
		)
	}
}

export default PatternRow;