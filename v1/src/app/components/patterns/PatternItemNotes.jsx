import React from 'react';
import PropTypes from 'prop-types';

import noteData from './data/notes.json';

class PatternItemNotes extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='pattern-item-notes'>
				{this.props.notes.map(function (id) {
					return (
						<p className='small' key={id}>
							{noteData[id].en}
						</p>
					)
				}.bind(this))}
			</div>
	  	);
	}
}

PatternItemNotes.propTypes = {
	notes: PropTypes.Array
}

export default PatternItemNotes;