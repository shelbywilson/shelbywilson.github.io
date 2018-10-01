import React from 'react';

import Dropdown from 'react-dropdown';

import __patternData from './data/patterns';
import PatternItem from './PatternItem.jsx';
import PatternSwatch from './PatternSwatch.jsx';
import PatternAppNav from './PatternAppNav.jsx';

import util from './../common/site-data/util.js';

const options = Object.keys(__patternData);

class PatternApp extends React.Component {
	constructor(props) {
		super(props);

		const hash = parseFloat(window.location.hash.replace(/#/g, ''), 10);
		const splitHash = hash.toString().split('.');
		const index = splitHash.length > 0 ? parseInt(splitHash[0], 10) : 1;

		let subActive = 0;

		if (splitHash.length > 1) {
			subActive = parseInt(splitHash[1], 10);
			if (__patternData[index]) {
				if (!__patternData[index].treadling[subActive]) {
					subActive = 0;
				}
			} else {
				subActive = 0;
			}
		}

		this.state = {
			active: __patternData[index] ? index : 1,
			subActive: subActive
		}

		this.navigatePatterns = this.navigatePatterns.bind(this);
		this.handleKeyUp = this.handleKeyUp.bind(this);
		this.selectPattern = this.selectPattern.bind(this);
		this.updateSubActive = this.updateSubActive.bind(this);
	}
	componentDidMount() {
		window.addEventListener("keyup", this.handleKeyUp);
	}
	componentWillUnmount() {
		window.removeEventListener("keyup", this.handleKeyUp);
	}
	handleKeyUp(e) {
		if (e.which === 37) {
			this.navigatePatterns(false);
		} else if (e.which === 39) {
			this.navigatePatterns(true);
		}
	}
	navigatePatterns(increase) {
		const lastPattern = Object.keys(__patternData).reduce(function(a, b) { return Math.max(a, b); });;
		let newState = this.state.active;

		if (increase) {
			newState = this.state.active === lastPattern ? 1 : this.state.active + 1;
			while(!__patternData[newState]) {
				newState += 1;
			} 
		} else {
			newState = this.state.active === 1 ? lastPattern : this.state.active - 1;
			while (!__patternData[newState]) {
				newState -= 1;
			} 
		}

		this.selectPattern(newState);
	}
	selectPattern(number) {
		number = number.value || number;

		this.setState({
			active: parseInt(number, 10),
			subActive: 0
		})

		util.setUrlHash(number);
	}
	updateSubActive(subActive) {
		this.setState({
			subActive: subActive
		})
	}
	render() {
		return (
			<div className='container pattern-app'>

				<PatternAppNav />

				<div className='pattern-select'>
					<Dropdown options={options}
						placeholder={'№ ' + this.state.active}
						onChange={this.selectPattern} />
				</div>

				<div className='pattern-app-controls'>
					<button type='button' className='btn-transparent' aria-label='Previous' onMouseUp={this.navigatePatterns.bind(this, false)}>
						<span className='pattern-app-controls-prev'></span>
					</button>
					<button type='button' className='btn-transparent' aria-label='Next' onMouseUp={this.navigatePatterns.bind(this, true)}>
						<span className='pattern-app-controls-next'></span>
					</button>
				</div>

				<PatternSwatch data={__patternData[this.state.active]}
					subActive={this.state.subActive} />
					
				<PatternItem data={__patternData[this.state.active]} 
					patternNumber={this.state.active} 
					subActive={this.state.subActive} 
					onUpdateSubActive={this.updateSubActive} />
			</div>
		)
	}
}

export default PatternApp;