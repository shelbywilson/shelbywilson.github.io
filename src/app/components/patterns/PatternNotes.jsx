import React, { PropTypes } from 'react';

import noteData from './data/notes.json';

class PatternNotes extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='patterns-notes'>
				{this.props.notes.map(function (id) {
					return (
						<p key={id}>
							{noteData[id].en}
						</p>
					)
				}.bind(this))}
			</div>
	  	);
	}
}

PatternNotes.propTypes = {
	notes: PropTypes.Array
}

export default PatternNotes;