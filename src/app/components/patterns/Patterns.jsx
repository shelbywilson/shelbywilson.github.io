import React from 'react';

import Dropdown from 'react-dropdown';

import patternData from './data/patterns';
import Pattern from './Pattern.jsx';
import PatternsAbout from './PatternsAbout.jsx';

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
		const numPatterns = Object.keys(patternData).length;
		let newState = 1;

		if (increase) {
			newState = this.state.active === numPatterns ? 1 : this.state.active + 1;
		} else {
			newState = this.state.active === 1 ? numPatterns : this.state.active - 1;
		}

		this.selectPattern(newState);
	}
	selectPattern(number) {
		number = number.value || number;

		this.setState({
			active: parseInt(number, 10)
		})

		if (history.pushState) {
		    history.pushState(null, null, '#' + number);
		}
		else {
		    location.hash = '#' + number;
		}
	}
	render() {
		return (
			<div className='container patterns'>
				<div className='patterns-select'>
					<Dropdown options={options}
						placeholder={'№ ' + this.state.active}
						onChange={this.selectPattern} />
				</div>
				<div className='patterns-nav'>
					<button type='button' className='btn-transparent' onMouseUp={this.navigatePatterns.bind(this, false)}>
						&lt;
					</button>
					<button type='button' className='btn-transparent'  onMouseUp={this.navigatePatterns.bind(this, true)}>
						&gt;
					</button>
				</div>
				<Pattern data={patternData[this.state.active]} 
					patternNumber={this.state.active} 
					subActive={this.state.subActive} />

				<PatternsAbout />
			</div>
		)
	}
}

export default Patterns;