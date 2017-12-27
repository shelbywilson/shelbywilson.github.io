import React from 'react';

import PatternRow from './PatternRow.jsx';
import PatternNotes from './PatternNotes.jsx';

import util from './../common/site-data/util.js';

class Pattern extends React.Component {
	constructor(props) {
		super(props);

		this.content = util.getContent('en').patterns;
	}
	_getRows(row, type, key, showCol) {
		let count = 0;
		if (Array.isArray(row[0])) {
			return (
				<tr>
					<td>
						<table>
							<tbody>
								{row.map(function (subrow, i) {
									count += 1;
									return (
										<PatternRow row={subrow} 
											showCol={i === row.length - 1} />
									)
								})}
								<tr>
									<td colSpan={row[0][0].length} className='patterns-item-section-spacer'>
										<span className='patterns-item-sub-section-label'>
											{this.content['opt-' + key]}
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
					showCol={showCol}
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
							<p className='patterns-item-section-label'>
								{this.content[type]}
							</p>
							<table className={'patterns-' + type}>
								<tbody>
									{this.props.data[type].map(function (row, i) {
										return (
											this._getRows(row, type, i, type !=='threading' ? i === this.props.data[type].length - 1 : false)
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