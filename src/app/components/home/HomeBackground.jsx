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
		}.bind(this), 2000);
	}
	componentWillUnMount() {
		window.removeEventListener("resize");
	}
	setSvg() {
	    let svg = d3.select(this.refs.svg);
	    let group;

	    svg.attr('width',window.innerWidth);
	    svg.attr('height',window.innerHeight);

	    const data = this._getInitialData(window.innerWidth, window.innerHeight);

    	group = svg.append('g')
    		.attr('class', 'group');

    	group.attr('transform', 'translate(' + window.innerWidth*0.6 + ',' + window.innerHeight*0.4 +')');

	    group.selectAll('.line')
	    	.data(data)
	    	.enter()
			.append('path')
			.attr('class', 'line')
          	.attr('d', function(d) { return lineFunction(d); })
          	.attr('transform', 'rotate(0)');
	}
    updateSvg() {
	    let svg = d3.select(this.refs.svg);
	    let group;

	    svg.attr('width',window.innerWidth);
	    svg.attr('height',window.innerHeight);

	    const data = this._getUpdatedData(window.innerWidth, window.innerHeight);
    	group = svg.select('.group');

	    group.selectAll('.line')
	    	.data(data)
	    	.transition()
	    	.attr('transform', function(d,i) { return 'rotate(' + i + ')'; })
	    	.duration(1200)
            .attr('d', function(d) { return lineFunction(d); });
    }
    resizeSvg() {
    	let svg = d3.select(this.refs.svg);

	    svg.attr('width',window.innerWidth);
	    svg.attr('height',window.innerHeight);

    	svg.select('.group')
    		.attr('transform', 'translate(' + window.innerWidth*0.6 + ',' + window.innerHeight*0.4 +')');
    }
    _getInitialData(width, height) {
    	let i = 1;
    	let data = [];	
    	const h = height /30;

    	do {
    		data.push([
	    		{
	    			x: -width * Math.random(),
	    			y: ((i/90 + 100/i) * h)
	    		},
	    		{
	    			x: width * Math.random(),
	    			y: ((i/90 + 100/i) * h)
	    		}
	    	]);
    		i += 1;
    	} while (i < 180);

    	return data;
    }

    _getUpdatedData(width, height) {
    	let i = 1;
    	let data = [];
    	const h = height /30;
    	const max = Math.max(width, height);

    	do {
    		data.push([
	    		{
	    			x: -max * (12/i),
	    			y: ((i/90 + 100/i) * h)
	    		},
	    		{
	    			x: max * 0.8,
	    			y: ((i/90 + 100/i) * h)
	    		}
	    	]);
    		i += 1;
    	} while (i < 180);

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