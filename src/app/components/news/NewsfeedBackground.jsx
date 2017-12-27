import React from 'react';
import * as d3 from "d3";

import colors from './data/colors';

class NewsfeedBackground extends React.Component {
	constructor(props) {
		super(props);
	}
    componentDidUpdate(prevProps, prevState) {
    	if (prevProps.clicks.length !== this.props.clicks.length) {
    		this.updateSvg();
    	}
    }
    updateSvg() {
	    let i;
	    let field;
	    let group;
	    let svg = d3.select(this.refs.svg);
	    let prevR = 1;
	    const grid = this._getGridData();

	    svg.selectAll("*").remove();
	    svg.attr('width',window.innerWidth);
	    svg.attr('height',window.innerHeight);

	    for (i in this.props.count) {
	    	group = svg.append('g')
	    		.attr('data-category', i);

	    	field = group.selectAll('g')
	    		.data(grid)
	    		.enter()
	    		.selectAll('circle')
	    		.data(function(d) { return d; })
	    		.enter()
	    		.append('circle');

	    	field.attr("cx", function (d) { return d.x + prevR; })
				.attr("cy", function (d) { return d.y + prevR; })
				.attr("r", this.props.count[i] * 3)
				.style("fill", colors[i]);

			prevR = prevR + this.props.count[i] * 3;
	    }
    }
    _getGridData() {
    	//adapted from https://bl.ocks.org/cagrimmett/07f8c8daea00946b9e704e3efcbd5739
	    let data = [];
	    let width = Math.max(100, window.innerWidth / 8);
	    let height = Math.max(100, window.innerHeight / 8);
	    let xpos = width/2;
	    let ypos = height/2;

	    // iterate for rows 
	    for (var row = 0; row < 8; row++) {
	        data.push( new Array() );

	        // iterate for cells/columns inside rows
	        for (var column = 0; column < 8; column++) {
	            data[row].push({
	                x: xpos,
	                y: ypos,
	                width: width,
	                height: height
	            });

	            xpos += width;
	        }
	        // reset the x position after a row is complete
	        xpos = width/2;

	        ypos += height; 
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