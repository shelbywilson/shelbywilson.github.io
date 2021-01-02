import React from 'react';
import * as d3 from "d3";

import colors from './data/colors';

class NewsfeedBackground extends React.Component {
	constructor(props) {
		super(props);

		this.updateSvg = this.updateSvg.bind(this);
	}
	componentDidMount() {
		window.addEventListener("resize", this.updateSvg);
		this.updateSvg();
	}
	componentWillUnMount() {
		window.removeEventListener("resize");
	}
    componentDidUpdate(prevProps, prevState) {
    	if (prevProps.clicks !== this.props.clicks) {
    		this.updateSvg();
    	}
    }
    updateSvg() {
	    let i;
	    let field;
	    let group;
	    let svg = d3.select(this.refs.svg);
	    let prevR = 1;
	    let count = 1;
	    let bin;
	    const grid = this._getGridData();

	    svg.selectAll("*").remove();
	    svg.attr('width',window.innerWidth);
	    svg.attr('height',window.innerHeight);

	    for (i in this.props.count) {
	    	group = svg.append('g');

	    	field = group.selectAll('g')
	    		.data(grid)
	    		.enter()
	    		.append('g')	    		
	    		.selectAll('circle')
	    		.data(function(d) { return d; })
	    		.enter()
	    		.append('circle');

	    	bin = parseInt(count, 10).toString(2);

	    	if (bin.length === 1) {
	    		bin = '01';
	    	} 

	    	field.attr("cx", function (d) { return d.x + (prevR * (bin[bin.length - 1] === '0' ? -1 : 1)); })
				.attr("cy", function (d) { return d.y + (prevR * (bin[bin.length - 2] === '0' ? -1 : 1)); })
				.attr("r", this.props.count[i] * 3)
				.style("fill", colors[i]);

			prevR = prevR + this.props.count[i] * 2;
			count += 1;
	    }
    }
    _getGridData() {
    	//adapted from https://bl.ocks.org/cagrimmett/07f8c8daea00946b9e704e3efcbd5739
	    let data = [];
	    let size = Math.max(120, window.innerWidth / 8);
	    let xpos = -size/2;
	    let ypos = -size/2;

	    // iterate for rows 
	    for (var row = 0; row < 10; row++) {
	        data.push( new Array() );

	        // iterate for cells/columns inside rows
	        for (var column = 0; column < 10; column++) {
	            data[row].push({
	                x: xpos,
	                y: ypos
	            });

	            xpos += size;
	        }
	        // reset the x position after a row is complete
	        xpos = -size/2;

	        ypos += size; 
	    }
	    return data;
	}
	render() {
		return (
			<svg className='newsfeed-bg' ref='svg'>
			</svg>
		)
	}
}

export default NewsfeedBackground;