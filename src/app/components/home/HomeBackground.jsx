import React from 'react';
import * as d3 from "d3";

const lineFunction = d3.line()
         .x(function(d) { return d.x; })
         .y(function(d) { return d.y; })

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

	    const data = this._getData(window.innerWidth, window.innerHeight);

	    for (i = 0; i < data.length; i += 1) {
	    	group = svg.append('g')
	    		.attr('class', 'group-' + i);

	    	if (i === 1) {
	    		group.attr('transform', 'translate(0,' + window.innerHeight +')')
	    	} else if (i === 2) {
	    		group.attr('transform', 'translate(' + window.innerWidth + ',' + window.innerHeight +')')
	    	}

		    group.selectAll('.line')
		    	.data(data[i])
		    	.enter()
				.append('path')
				.attr('class', 'line')
	              	.attr('d', function(d) { return lineFunction(d); })
	              	.attr('transform', i === 1 ? 'rotate(-135)' : i === 2 ? 'rotate(135)' : '')
	                .attr('stroke', 'blue')
	                .attr('stroke-width', 5)
	                .attr('stroke-opacity', 0.3)
	                .attr('fill', 'none');
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
		    	.delay(function (d, x) { return (x * 20 - 100) + (i * 200)})
		    	.duration(500)
	            .attr('d', function(d) { return lineFunction(d); });
	    }
    }
    resizeSvg() {
    	let svg = d3.select(this.refs.svg);
	    let group;
	    let i;

	    svg.attr('width',window.innerWidth);
	    svg.attr('height',window.innerHeight);

	    const data = this._getUpdatedData(window.innerWidth, window.innerHeight);

	    for (i = 0; i < data.length; i += 1) {
	    	group = svg.select('.group-' + i);

	    	if (i === 1) {
	    		group.attr('transform', 'translate(0,' + window.innerHeight +')')
	    	} else if (i === 2) {
	    		group.attr('transform', 'translate(' + window.innerWidth + ',' + window.innerHeight +')')
	    	}

		    group.selectAll('.line')
		    	.data(data[i])
	            .attr('d', function(d) { return lineFunction(d); });
	    }
    }
    _getData(width, height) {
    	let i;
    	let j;
    	let data = [];
    	let temp;

    	for (i = 0; i < 3; i += 1) {
    		j = 1;
    		temp = [];
	    	do {

	    		temp.push([
		    		{
		    			x: -width,
		    			y: 0 
		    		},
		    		{
		    			x: width * 2,
		    			y: 0
		    		}
		    	]);
	    		j += 1;
	    	} while (j < 20);

	    	data.push(temp);
	    }

    	return data;
    }

    _getUpdatedData(width, height) {
    	let i;
    	let j;
    	let step;
    	let data = [];
    	let temp;
    	const h = height /40;

    	for (i = 0; i < 3; i += 1) {
    		j = 1;
    		temp = [];
	    	do {
    			step = 30/j;

	    		temp.push([
		    		{
		    			x: -width,
		    			y: h * step
		    		},
		    		{
		    			x: width * 2,
		    			y: h * step
		    		}
		    	]);
	    		j += 1;
	    	} while (j < 20);

	    	data.push(temp);
	    }

	    console.log(data)

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