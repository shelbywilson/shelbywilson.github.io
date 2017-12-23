import React from 'react';

import PatternRow from './PatternRow.jsx';

class Pattern extends React.Component {
	constructor(props) {
		super(props);
	}
	_getRows(row, type, key) {
		if (Array.isArray(row[0])) {
			return (
				<tr>
					<td>
						<table>
							<tbody>
								{row.map(function (subrow, i) {
									return (
										<PatternRow row={subrow}  />
									)
								})}
								<tr>
									<td colSpan={row[0][0].length} className='patterns-item-section-spacer'>
										<span className='patterns-item-section-label'>
											{key}
										</span>
									</td>
								</tr>
							</tbody>
						</table>
					</td>
				</tr>
			)
		} else {
			return (
				<PatternRow row={row} 
					rowNum={type === 'threading' ? key + 1 : false} />
			)
		}
	}
	render() {
		return (
			<div className='patterns-item'>
				{['threading', 'tie_up', 'treadling'].map(function (type) {
					return (
						<div className='patterns-item-section'>						
							<p>
								{type}
							</p>
							<table className={'patterns-' + type}>
								<tbody>
									{this.props.data[type].map(function (row, i) {
										return (
											this._getRows(row, type, i)
										)
									}.bind(this))}
								</tbody>
							</table>
						</div>
					)
				}.bind(this))}
			</div>
		)
	}
}

export default Pattern;