import React from 'react';

import Dropdown from 'react-dropdown';

import patternData from './data/patterns';
import Pattern from './Pattern.jsx';
import PatternsAbout from './PatternsAbout.jsx';
import PatternPreview from './PatternPreview.jsx';

import util from './../common/site-data/util.js';

const options = Object.keys(patternData);

class Patterns extends React.Component {
	constructor(props) {
		super(props);

		const hash = parseFloat(window.location.hash.replace(/#/g, ''), 10);
		const splitHash = hash.toString().split('.');
		const index = splitHash.length > 0 ? parseInt(splitHash[0], 10) : 1;

		let subActive = 0;

		if (splitHash.length > 1) {
			subActive = parseInt(splitHash[1], 10);
			if (patternData[index]) {
				if (!patternData[index].treadling[subActive]) {
					subActive = 0;
				}
			} else {
				subActive = 0;
			}
		}

		this.state = {
			active: patternData[index] ? index : 1,
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
		const lastPattern = Object.keys(patternData).reduce(function(a, b) { return Math.max(a, b); });;
		let newState = this.state.active;

		if (increase) {
			newState = this.state.active === lastPattern ? 1 : this.state.active + 1;
			while(!patternData[newState]) {
				newState += 1;
			} 
		} else {
			newState = this.state.active === 1 ? lastPattern : this.state.active - 1;
			while (!patternData[newState]) {
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
			<div className='container patterns'>
				<div className='pattern-builder-link'>
					<a href='/pattern-builder'>
						BYO &rarr;
					</a>
				</div>
				<div className='pattern-select'>
					<Dropdown options={options}
						placeholder={'№ ' + this.state.active}
						onChange={this.selectPattern} />
				</div>
				<div className='pattern-nav'>
					<button type='button' className='btn-transparent' onMouseUp={this.navigatePatterns.bind(this, false)}>
						&lt;
					</button>
					<button type='button' className='btn-transparent'  onMouseUp={this.navigatePatterns.bind(this, true)}>
						&gt;
					</button>
				</div>

				<PatternPreview data={patternData[this.state.active]}
					subActive={this.state.subActive} />
					
				<Pattern data={patternData[this.state.active]} 
					patternNumber={this.state.active} 
					subActive={this.state.subActive} 
					onUpdateSubActive={this.updateSubActive} />

				<PatternsAbout />
			</div>
		)
	}
}

export default Patterns;