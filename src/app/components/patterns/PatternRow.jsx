import React from 'react';

const cellClasses = ['not-checked', 'checked', 'checked-alt'];

class PatternRow extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<tr className={'patterns-item-row'}>
				{this.props.row.map(function (cellVal, i) {
					return (
						<td className={'patterns-item-cell ' + (cellClasses[cellVal])}>
							{this.props.rowNum && i === 0 ?
								<span className='patterns-item-cell-row-num'>
									{this.props.rowNum}
								</span>
								:
								null
							}
							{this.props.showCol ?
								<span className='patterns-item-cell-col-num'>
									{this.props.row.length - i}
								</span>
								:
								null
							}
							<div className='secondary-type'>
							</div>
						</td>
					)
				}.bind(this))}
			</tr>	
		)
	}
}

export default PatternRow;