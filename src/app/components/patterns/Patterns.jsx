import React from 'react';

import _patternData from './data/patterns.js';
import Pattern from './Pattern.jsx';

class Patterns extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			active: 1
		}

		this.navigate = this.navigate.bind(this);
	}
	navigate(increase) {
		const numPatterns = Object.keys(_patternData).length;
		if (increase) {
			this.setState({
				active: this.state.active === numPatterns ? 1 : this.state.active + 1
			})
		} else {
			this.setState({
				active: this.state.active === 1 ? numPatterns : this.state.active - 1
			})
		}
	}
	render() {
		return (
			<div className='container patterns'>
				<h3>
					&#8470;&nbsp;{this.state.active}
				</h3>
				<div className='patterns-nav'>
					<button type='button' className='btn-transparent' onMouseUp={this.navigate.bind(this, false)}>
						&lt;
					</button>
					<button type='button' className='btn-transparent'  onMouseUp={this.navigate.bind(this, true)}>
						&gt;
					</button>
				</div>
				<Pattern data={_patternData[this.state.active]} 
					patternNumber={this.state.active} />
			</div>
		)
	}
}

export default Patterns;