import React from 'react';

import PatternNotes from './PatternNotes.jsx';
import PatternSection from './PatternSection.jsx';
import PatternGrid from './PatternGrid.jsx';

import util from './../common/site-data/util.js';

class Pattern extends React.Component {
	constructor(props) {
		super(props);

		this.content = util.getContent('en').patterns;

		this.updateSubActive = this.props.onUpdateSubActive;
	}
	render() {
		return (
			<div className='pattern-item'>
						
				<PatternNotes notes={this.props.data.notes || []} />	
					
				{['threading', 'tie_up', 'treadling'].map(function (type) {
					return (
						<PatternSection label={this.content[type]} key={type}>
							<PatternGrid data={this.props.data[type]} 
								type={type} 
								patternNumber={this.props.patternNumber}
								subActive={this.props.subActive}
								onUpdateSubActive={this.updateSubActive} />
						</PatternSection>
					)
				}.bind(this))}				
			</div>
		)
	}
}

export default Pattern;