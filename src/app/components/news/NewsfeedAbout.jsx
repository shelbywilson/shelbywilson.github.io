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
		this.getData = this.getData.bind(this);
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
	    let circle;
	    let group;

	   	svg.selectAll("*").remove();
	    svg.attr('width', '100%');
	    svg.attr('height', '100%');

	    const data = this.getData();

	    group = svg.selectAll('svg')
	    	.data(data)
	    	.enter()
	    	.append('svg')	    	
	    	.attr('x', function(d) { return d.x; })
	    	.attr('y', function(d) { return d.y; })
	    	.append('g');

	    group.append('circle')	    	
	    	.attr('r', function(d) { return d.r + '%'; })
	    	.style("fill", function(d) { return d.color; });

	    group.append('text')
	    	.text(function(d) { return d.category; })
	    	.style('font-size', 12);
	}
	triggerUpdate() {
		this.setState({
			update: !this.state.update
		})
	}
	getData() {
		let data = [];
		let i;
		let j = 1;
		let prev = 0;
		let bin;

		for (i in this.props.count) {
			bin = parseInt(j, 10).toString(2);

	    	if (bin.length === 1) {
	    		bin = '01';
	    	} 

			data.push({
				category: i,
				count: this.props.count[i],
				r: this.props.count[i] * 1.1,
				x: 50 + (prev * (bin[bin.length - 1] === '0' ? -1 : 1)) + '%',
				y: 50 + (prev * (bin[bin.length - 2] === '0' ? -1 : 1)) + '%',
				color: colors[i]
			});
			prev += this.props.count[i];
			j += 1;
		}

		return data;
	}
	render() {
		return (
			<ToggleAbout onUpdate={this.triggerUpdate}>
				<svg ref='svg'></svg>
			</ToggleAbout>
		)
	}
}

export default NewsfeedAbout;