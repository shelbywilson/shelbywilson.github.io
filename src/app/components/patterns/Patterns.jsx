import React from 'react';

import patternData from './data/patterns';
import Pattern from './Pattern.jsx';

class Patterns extends React.Component {
	constructor(props) {
		super(props);

		const hash = parseInt(window.location.hash.replace(/#/g, ''), 10);

		this.state = {
			active: patternData[hash] ? hash : 1
		}

		this.navigatePatterns = this.navigatePatterns.bind(this);
		this.handleKeyUp = this.handleKeyUp.bind(this);
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

		this.setState({
			active: newState
		});

		window.location.hash = newState;
	}
	render() {
		return (
			<div className='container patterns'>
				<h3>
					&#8470;&nbsp;{this.state.active}
				</h3>
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

			</div>
		)
	}
}

export default Patterns;