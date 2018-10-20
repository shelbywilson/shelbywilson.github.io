import React from 'react';

import PatternItemNotes from './PatternItemNotes.jsx';
import PatternSection from './PatternSection.jsx';
import PatternGrid from './PatternGrid.jsx';

import util from './../common/site-data/util.js';

class PatternItem extends React.Component {
	constructor(props) {
		super(props);

		this.content = util.getContent('en').patterns;

		this.updateSubActive = this.props.onUpdateSubActive;
		this.isEditable = this.isEditable.bind(this);
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
		const {
			data,
			patternNumber,
			subActive
		} = this.props;
		return (
			<div className='pattern-item'>

				{this.isEditable() ? 
					<div>
						<a className='pattern-item-edit' href={'/patterns/builder' + '#' + util.getPatternEncodedUrl(data) + '_pn-' + patternNumber + '-' + subActive}>
							edit
						</a>
					</div>	
					:
					null
				}
						
				<PatternItemNotes notes={data.notes || []} />
					
				{['threading', 'tie_up', 'treadling'].map(function (type) {
					return (
						<PatternSection label={this.content[type]} key={type}>
							<PatternGrid data={data[type]} 
								type={type} 
								patternNumber={patternNumber}
								subActive={subActive}
								onUpdateSubActive={this.updateSubActive} />
						</PatternSection>
					)
				}.bind(this))}		
			</div>
		)
	}
}

export default PatternItem;