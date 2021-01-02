import React from 'react';

import util from './../../utility/util';
import getContent from './../../utility/getContent';

class PatternAppAbout extends React.Component {
	constructor(props) {
		super(props);

		this.content = getContent('en').patterns;
	}
	render() {
		return (
			<div className='container'>
				<h2>
					{this.content['about-name']}
				</h2>
				<p>
					This project began as a translation of the <a className='pseudo-btn-primary' href={util.getFilePath('weaving_patterns.pdf')} target='_blank'>
						{this.content['about-name']}
					</a> for my mom, who is a weaver. 
				</p>
				<p>
					Floor loom weaving drafts are composed of three parts: threading, tie-up, and treadling sequence. The threading is repeated horizontally to achieve the desired fabric width while the treadling is repeated to achieve the desired length. Some patterns have multiple treadlings which will produce variations.
				</p>
				<p>
					Clicking 'edit' will take you to the <a href='/patterns/builder' target='_blank'>pattern builder</a> module. As the patterns are edited, the url is updated with a sharable encoded pattern.
				</p>
				<p>
					A note about my translation process: because the source material is a pdf, I first transcribed it as written. Then, because it was published in 1912, and because of the <a href='https://en.wikipedia.org/wiki/Reforms_of_Russian_orthography#The_post-revolution_reform' target='_blank'>post-revolution reform</a> of Russian orthography, I translated old syntax to modern. Finally, I translated to English. This manual is fairly technical so I constructed a glossary of weaving terms.
				</p>
				<p>
					A note about my technical process: I encoded each pattern as an array of binary. The swatch is dynamically generated from the three parts of each pattern using d3.js.
				</p>
			</div>
		)
	}
}

export default PatternAppAbout;