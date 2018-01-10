import React from 'react';
import * as d3 from "d3";
import $ from 'jquery';

const lineFunction = d3.line()
         .x(function(d) { return d.x; })
         .y(function(d) { return d.y; });

class HomepageBackground extends React.Component {
	constructor(props) {
		super(props);

		this.updateSvg = this.updateSvg.bind(this);
		this.setSvg = this.setSvg.bind(this);
		this.resizeSvg = this.resizeSvg.bind(this);
	}
	componentDidMount() {
		window.addEventListener("resize", this.resizeSvg);
		this.setSvg();

		setTimeout(function () {
			this.updateSvg();
			$('body').addClass('home-loaded');
		}.bind(this), 1000);
	}
	componentWillUnMount() {
		window.removeEventListener("resize");
	}
	setSvg() {
	    let svg = d3.select(this.refs.svg);
	    let group;
	    let i;

	    svg.attr('width',window.innerWidth);
	    svg.attr('height',window.innerHeight);

	    const data = this._getInitialData(window.innerWidth, window.innerHeight);

	    for (i = 0; i < data.length; i += 1) {
	    	group = svg.append('g')
	    		.attr('class', 'group-' + i);

	    	group.attr('transform', 'translate(' + window.innerWidth*0.6 + ',' + window.innerHeight*0.4 +')');

		    group.selectAll('.line')
		    	.data(data[i])
		    	.enter()
				.append('path')
				.attr('class', 'line')
              	.attr('d', function(d) { return lineFunction(d); })
              	.attr('transform', 'rotate(0)');
	    }
	}
    updateSvg() {
	    let svg = d3.select(this.refs.svg);
	    let group;
	    let i;

	    console.log('update')

	    svg.attr('width',window.innerWidth);
	    svg.attr('height',window.innerHeight);

	    const data = this._getUpdatedData(window.innerWidth, window.innerHeight);

	    for (i = 0; i < data.length; i += 1) {
	    	group = svg.select('.group-' + i);

		    group.selectAll('.line')
		    	.data(data[i])
		    	.transition()
		    	.attr('transform', function(d,i) { return 'rotate(' + i + ')'; })
		    	.duration(1200)
	            .attr('d', function(d) { return lineFunction(d); });
	    }
    }
    resizeSvg() {
    	let svg = d3.select(this.refs.svg);
	    let group;
	    let i;

	    svg.attr('width',window.innerWidth);
	    svg.attr('height',window.innerHeight);

	    for (i = 0; i < data.length; i += 1) {
	    	group = svg.select('.group-' + i);

	    	group.attr('transform', 'translate(' + window.innerWidth*0.6 + ',' + window.innerHeight*0.4 +')');
	    }
    }
    _getInitialData(width, height) {
    	let i;
    	let j;
    	let data = [];
    	let temp;    	
    	const h = height /30;

    	//for (i = 0; i < 3; i += 1) {
    		j = 1;
    		temp = [];
	    	do {

	    		temp.push([
		    		{
		    			x: -width * Math.random(),
		    			y: ((j/90 + 100/j) * h)
		    		},
		    		{
		    			x: width * Math.random(),
		    			y: ((j/90 + 100/j) * h)
		    		}
		    	]);
	    		j += 1;
	    	} while (j < 180);

	    	data.push(temp);
	    //}

    	return data;
    }

    _getUpdatedData(width, height) {
    	let i;
    	let j;
    	let data = [];
    	let temp;
    	const h = height /30;

    	//for (i = 0; i < 3; i += 1) {
    		j = 1;
    		temp = [];
	    	do {

	    		temp.push([
		    		{
		    			x: -width * 0.4,
		    			y: ((j/90 + 100/j) * h)
		    		},
		    		{
		    			x: width * 0.8,
		    			y: ((j/90 + 100/j) * h)
		    		}
		    	]);
	    		j += 1;
	    	} while (j < 180);

	    	data.push(temp);
	    //}

    	return data;
    }
	render() {
		return (
			<div className='home-bg'>
				<svg ref='svg'>
				</svg>
			</div>
		)
	}
}

export default HomepageBackground;