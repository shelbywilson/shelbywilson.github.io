import React from 'react';

import Dropdown from 'react-dropdown';

import patternData from './data/patterns';
import Pattern from './Pattern.jsx';
import PatternsAbout from './PatternsAbout.jsx';

const options = Object.keys(patternData);

class Patterns extends React.Component {
	constructor(props) {
		super(props);

		const hash = parseInt(window.location.hash.replace(/#/g, ''), 10);

		this.state = {
			active: patternData[hash] ? hash : 1
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

		window.location.hash = number;
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
					patternNumber={this.state.active} />

				<PatternsAbout />
			</div>
		)
	}
}

export default Patterns;