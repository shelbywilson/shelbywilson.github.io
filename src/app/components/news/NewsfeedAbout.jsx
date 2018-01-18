import React from 'react';
import * as d3 from "d3";

import ToggleAbout from './../common/header/ToggleAbout.jsx';

import colors from './data/colors';

class NewsfeedAbout extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			update: false
		}

		this.updateSvg = this.updateSvg.bind(this);
		this.triggerUpdate = this.triggerUpdate.bind(this);
	}
	componentDidUpdate(prevProps, prevState) {
		if (this.state.update !== prevState.update) {
			this.updateSvg();
		}
	}
	updateSvg() {
		let svg = d3.select(this.refs.svg);
	    let prevR = 1;
	    let j = 1;
	    let bin;
	    let i;
	    let field;
	    let group;
	    const size = Math.min(window.innerHeight * 0.5, Math.min(window.innerWidth, 840));

	   	svg.selectAll("*").remove();
	    svg.attr('width', size);
	    svg.attr('height', size);

	    console.log(svg, this.props.count)

	    for (i in this.props.count) {
			group = svg.append('g');

	    	field = group.selectAll('circle')
	    		.data([this.props.count[i]])
	    		.enter()
	    		.append('circle');

	    	bin = parseInt(j, 10).toString(2);

	    	if (bin.length === 1) {
	    		bin = '01';
	    	} 

	    	field.attr("cx", function (d) { return size/2 + (prevR * (bin[bin.length - 1] === '0' ? -1 : 1)); })
				.attr("cy", function (d) { return size/2 + (prevR * (bin[bin.length - 2] === '0' ? -1 : 1)); })
				.attr("r", function(d) { return d * size/45; })
				.style("fill", colors[i]);

			prevR = prevR + this.props.count[i] * size/60;
			j += 1;
	    }
	}
	triggerUpdate() {
		this.setState({
			update: !this.state.update
		})
	}
	render() {
		return (
			<ToggleAbout onUpdate={this.triggerUpdate}>
				{JSON.stringify(this.props)}

				<svg ref='svg'></svg>
			</ToggleAbout>
		)
	}
}

export default NewsfeedAbout;