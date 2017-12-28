import React from 'react';

import PatternNotes from './PatternNotes.jsx';
import PatternItemSection from './PatternItemSection.jsx';
import PatternItemGrid from './PatternItemGrid.jsx';

import util from './../common/site-data/util.js';

class Pattern extends React.Component {
	constructor(props) {
		super(props);

		this.content = util.getContent('en').patterns;
	}
	render() {
		return (
			<div className={'patterns-item' + (this.props.data.threading[0].length > 20 ? ' wrap' : '')}>
						
				<PatternNotes notes={this.props.data.notes || []} />	
					
				{['threading', 'tie_up', 'treadling'].map(function (type) {
					return (
						<PatternItemSection label={this.content[type]} key={type}>
							<PatternItemGrid data={this.props.data[type]} 
								type={type} 
								patternNumber={this.props.patternNumber}
								subActive={this.props.subActive} />
						</PatternItemSection>
					)
				}.bind(this))}				
			</div>
		)
	}
}

export default Pattern;