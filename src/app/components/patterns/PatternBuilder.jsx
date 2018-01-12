import React from 'react';

import PatternPreview from './PatternPreview.jsx';
import PatternSection from './PatternSection.jsx';
import PatternGrid from './PatternGrid.jsx';

import util from './../common/site-data/util.js';

class PatternBuilder extends React.Component {
	constructor(props) {
		super(props);

		const defaultState = {
			threading: [
				[0,0,0,0],
				[0,0,0,0],
				[0,0,0,0],
				[0,0,0,0]
			],
			tie_up: [
				[0,0],
				[0,0],
				[0,0],
				[0,0]
			],
			treadling: [
				[0,0],
				[0,0]
			]
		}
		const data = util.getPatternDecodeFromUrl(window.location.hash.replace(/#/g, ''));

		if (data) {
			this.state = data;
		} else {
			this.state = defaultState;
		}

		this.toggleVal = this.toggleVal.bind(this);
		this.modifyGrid = this.modifyGrid.bind(this);

		this.content = util.getContent('en').patterns;
	}
	componentDidUpdate() {
		util.setUrlHash(util.getPatternEncodedUrl(this.state));
	}
	toggleVal({type = 'threading', col = 0, row = 0, val = 0}) {
		let grid = this.state[type].slice();
		let update = {};

		if (type === 'treadling') {
			if (grid[row].indexOf(1) > -1 || grid[row].indexOf(2) > -1) {
				grid[row].forEach(function(val, i) {
					grid[row][i] = 0;
				})
			}
		}

		grid[row][col] = val;
		update[type] = grid;

		this.setState(update);
	}
	modifyGrid({isAddCol = false, isAddRow = false, isRemoveCol = false, isRemoveRow = false, isTreadling = false, isThreading = false}) {
		let update = {};
		let threading = this.state.threading.slice();
		let treadling = this.state.treadling.slice();
		let tie_up = this.state.tie_up.slice();
		const emptyRowThreading = threading[0].map(function(){ return 0; });
		const emptyRowTreadling = treadling[0].map(function(){ return 0; });
		const emptyRowTieUp = tie_up[0].map(function() { return 0; });

		if (isThreading) {
			if (isAddRow) {
				threading.push(emptyRowThreading);
				tie_up.push(emptyRowTieUp);
			} else if (isAddCol) {
				threading.forEach(function(row) {
					row.unshift(0);
				});
			} else if (isRemoveRow) {
				if (threading.length > 1) {
					threading.splice(-1);
					tie_up.splice(-1);
				}
			} else if (isRemoveCol) {
				if (threading[0].length > 1) {
					threading.forEach(function(row) {
						row.shift();
					});
				}
			}
		} else if (isTreadling) {
			if (isAddRow) {
				treadling.push(emptyRowTreadling);
			} else if (isAddCol) {
				treadling.forEach(function(row) {
					row.unshift(0);
				});
				tie_up.forEach(function(row) {
					row.unshift(0);
				});
			} else if (isRemoveRow) {
				if (treadling.length > 1) {
					treadling.splice(-1);
				}
			} else if (isRemoveCol) {
				if (treadling[0].length > 1) {
					treadling.forEach(function(row) {
						row.shift();
					});
					tie_up.forEach(function(row) {
						row.shift();
					});
				}
			}
		}

		update.threading = threading;
		update.tie_up = tie_up;
		update.treadling = treadling;

		this.setState(update);
	}
	render() {
		return (
			<div className='pattern-item'>	
				<div>
					<h4>
						threading
					</h4>	
					row	
					<button type='button' onMouseUp={this.modifyGrid.bind(this, {isAddRow: true, isThreading: true} )}>&#43;</button>	
					<button type='button' onMouseUp={this.modifyGrid.bind(this, {isRemoveRow: true, isThreading: true} )}>&minus;</button>
					col		
					<button type='button' onMouseUp={this.modifyGrid.bind(this, {isAddCol: true, isThreading: true } )}>&#43;</button>	
					<button type='button' onMouseUp={this.modifyGrid.bind(this, {isRemoveCol: true, isThreading: true } )}>&minus;</button>
				</div>
				<div>
					<h4>
						treading order
					</h4>
					row
					<button type='button' onMouseUp={this.modifyGrid.bind(this, {isAddRow: true, isTreadling: true} )}>&#43;</button>	
					<button type='button' onMouseUp={this.modifyGrid.bind(this, {isRemoveRow: true, isTreadling: true} )}>&minus;</button>
					col		
					<button type='button' onMouseUp={this.modifyGrid.bind(this, {isAddCol: true, isTreadling: true } )}>&#43;</button>	
					<button type='button' onMouseUp={this.modifyGrid.bind(this, {isRemoveCol: true, isTreadling: true } )}>&minus;</button>
				</div>
				{['threading', 'tie_up', 'treadling'].map(function (type) {
					return (
						<PatternSection label={this.content[type]} key={type}>
							<PatternGrid data={this.state[type]} 
								type={type} 
								patternNumber={''}
								subActive={0}
								onToggleVal={this.toggleVal}
								onUpdateSubActive={function(){return;}} 
								onModifyGrid={this.modifyGrid} />
						</PatternSection>
					)
				}.bind(this))}	
				<PatternPreview data={this.state}
					subActive={0} />
			</div>
		)
	}
}

export default PatternBuilder;