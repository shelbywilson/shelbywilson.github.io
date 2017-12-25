import React from 'react';

import PatternRow from './PatternRow.jsx';
import PatternNotes from './PatternNotes.jsx';

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
					rowNum={type === 'threading' || type === 'tie_up' ? key + 1 : false} />
			)
		}
	}
	render() {
		return (
			<div className='patterns-item'>
						
				<PatternNotes notes={this.props.data.notes || []} />	
					
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
							{type === 'treadling' || type === 'tie_up' ?
								<table>
									<tbody>
										<tr>
											{type === 'tie_up' &&
												<td className='patterns-item-cell'>
												</td>
											}
											{this.props.data.tie_up[0].map(function (col, i) {
												return (
													<td className='patterns-item-cell' key={i}>
														{this.props.data.tie_up[0].length - i}
													</td>
												)
											}.bind(this))}
										</tr>
									</tbody>
								</table>
								:
								null
							}
						</div>
					)
				}.bind(this))}
			</div>
		)
	}
}

export default Pattern;