import React from 'react';
import * as d3 from "d3";

import util from './../common/site-data/util.js';

class PatternItemGrid extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			active: props.subActive || 0,
			sections: Array.isArray(props.data[0][0]) ? props.data.length : 1
		}	

		this.content = util.getContent('en').patterns;
		this.updateSvg = this.updateSvg.bind(this);
		this.changeSection = this.changeSection.bind(this);
	}
	componentDidMount() {
		window.addEventListener("resize", this.updateSvg);
		this.updateSvg();
	}
	componentWillUnMount() {
		window.removeEventListener("resize");
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.data != this.props.data) {
			this.setState({
				active: 0,
				sections: Array.isArray(nextProps.data[0][0]) ? nextProps.data.length : 1
			})
		}
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.data != this.props.data) {
			this.updateSvg();
		}
	}
	updateSvg() {
		const size = window.innerWidth > 450 ? 22 : 16;
		const fontSize = window.innerWidth > 450 ? 14 : 11;
		const data = this.props.data;

		let svg = d3.select(this.refs.svg);
		svg.selectAll("*").remove();
	    svg.attr('width', size * (data[0].length + 1) + 1);
	    svg.attr('height', size * (data.length + 1));

    	let row = svg.selectAll('.row')
    		.data(data)
    		.enter()
    		.append('g')
    		.attr('class', 'row')
    		.attr('transform', function(d,i){ return 'translate(0,' + (i * size) + ')'});

    	let col = row.selectAll('.col')
    		.data(function (d) { return d; })
    		.enter()
    		.append('g')
    		.attr('class', 'col')
    		.attr('transform', function(d,i){ return 'translate(' + ((i + 1) * size) + ', 0)'});;
    		
    	col.append("rect")
		    .attr("class","square")
		    .attr("width", size)
		    .attr("height", size)
		    .style("fill", function(d,i) { return d === 1 ? '#45a6f3' : '#fff' })
		 
		col.filter(function(d){ return d == 2; })
			.append('circle')
		    .attr("r", (size/2 - 4))
		    .attr("cy", size/2)
		    .attr("cx", size/2)
		    .style('fill', 'transparent')
		    .style('stroke-width', '2')
		    .style('stroke','#45a6f3');

		if (this.props.type === 'tie_up' || this.props.type === 'threading') {
			row.append('text')
				.attr('class', 'label')
				.attr('transform', 'translate(' + fontSize/2 + ',' + (fontSize + 2) + ')')
		    	.style('font-size', fontSize)
				.text(function (d, i) { return i + 1; })
		}

		if (this.props.type === 'tie_up' || this.props.type === 'treadling') {
			row.filter(function(d, i){ return i === data.length - 1; })
				.selectAll('.col')
				.append('text')
				.attr('class', 'label')
				.attr('transform', 'translate(' + fontSize/2 + ',' + (size + fontSize) + ')')
		    	.style('font-size', fontSize)
				.text(function (d, i) { return data[0].length - i; })
		}
	}
	changeSection(i) {
		this.setState({
			active: i
		})

		if (history.pushState) {
		    history.pushState(null, null, '#' + this.props.patternNumber + '.' + i);
		}
		else {
		    location.hash = '#' + this.props.patternNumber + '.' + i;
		}
	}
	render() {
		if (this.state.sections > 1) {
			return (
				<div>
					<div className='content-tabs'>
						{this.props.data.map(function(section, i) {
							return (
								<button className={i == this.state.active ? 'selected' : ''} type='button' onMouseUp={this.changeSection.bind(this, i)}>
									{this.content['opt-' + i]}
								</button>
							)
						}.bind(this))}
					</div>
					<PatternItemGrid data={this.props.data[this.state.active]} 
						patternNumber={this.props.patternNumber}
						type={this.props.type} />
				</div>
			)
		}

		return (
			<div>
				<svg ref='svg'></svg>
			</div>
		)
	}
}

export default PatternItemGrid;