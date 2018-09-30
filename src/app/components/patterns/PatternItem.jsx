import React from 'react';

import PatternNotes from './PatternNotes.jsx';
import PatternSection from './PatternSection.jsx';
import PatternGrid from './PatternGrid.jsx';

import util from './../common/site-data/util.js';

class PatternItem extends React.Component {
	constructor(props) {
		super(props);

		this.content = util.getContent('en').patterns;

		this.updateSubActive = this.props.onUpdateSubActive;
		this._isEditable = this.isEditable.bind(this);
	}
	isEditable() {
		let i;
		if (this.props.data.threading[0].length > 24) {
			return false;
		} else if (Array.isArray(this.props.data.treadling[0][0])) {
			return false;
		}

		for (i = 0; i < this.props.data.treadling.length; i += 1) {
			if (this.props.data.treadling[i].indexOf(2) > -1) {
				return false;
			}
		}
		for (i = 0; i < this.props.data.threading.length; i += 1) {
			if (this.props.data.threading[i].indexOf(2) > -1) {
				return false;
			}
		}

		return true;
	}
	render() {
		return (
			<div className='pattern-item'>

				{this._isEditable ? 
					<div>
						<a href={'/patterns/builder' + '#' + util.getPatternEncodedUrl(this.props.data)}>
							edit
						</a>
					</div>	
					:
					null
				}
						
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

export default PatternItem;