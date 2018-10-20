import React from 'react';

import PatternSwatch from './PatternSwatch.jsx';
import PatternSection from './PatternSection.jsx';
import PatternGrid from './PatternGrid.jsx';
import PatternBuilderControls from './PatternBuilderControls.jsx';
import PatternAppNav from './PatternAppNav.jsx';

import util from './../common/site-data/util.js';

let defaultState = {
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
		[0,0],
		[0,0],
		[0,0],
		[0,0],
		[0,0]
	],
	patternNumber: false
}

class PatternBuilder extends React.Component {
	constructor(props) {
		super(props);

		const data = util.getPatternDecodeFromUrl(window.location.hash.replace(/#/g, ''));

		console.log(data)

		if (data) {
			this.state = data;
			defaultState = JSON.parse(JSON.stringify(data));
		} else {
			this.state = JSON.parse(JSON.stringify(defaultState));
		}

		this.toggleVal = this.toggleVal.bind(this);
		this.modifyGrid = this.modifyGrid.bind(this);
		this.reset = this.reset.bind(this);

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
			if (isAddRow && treadling.length < 25) {
				threading.push(emptyRowThreading);
				tie_up.push(emptyRowTieUp);
			} else if (isAddCol && threading[0].length < 25) {
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
			if (isAddRow && treadling.length < 25) {
				treadling.push(emptyRowTreadling);
			} else if (isAddCol && treadling[0].length < 25) {
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
	reset() {
		this.setState(JSON.parse(JSON.stringify(defaultState)));
	}
	render() {
		return (
			<div className='pattern-builder pattern-app container'>	

				<PatternAppNav />

				<div className='pattern-item'>
					<PatternBuilderControls onReset={this.reset} 
						patternNumber={this.state.patternNumber} />

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
					<PatternSwatch data={this.state}
						subActive={0} />
				</div>
			</div>
		)
	}
}

export default PatternBuilder;