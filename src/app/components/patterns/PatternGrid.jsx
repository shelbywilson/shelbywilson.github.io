import React from 'react';
import * as d3 from "d3";

import util from './../common/site-data/util.js';

class PatternGrid extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
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
		    .attr("class", function(d,i) { return (d === 1 ? 'primary ' : '') + 'square';  })
		    .attr("width", size)
		    .attr("height", size);
		 
		col.filter(function(d){ return d == 2; })
			.append('circle')
			.attr('class','secondary')
		    .attr("r", (size/2 - 4))
		    .attr("cy", size/2)
		    .attr("cx", size/2);

		if (this.props.type === 'threading') {
			row.append('text')
				.attr('class', 'label')
				.attr('transform', 'translate(' + fontSize/2 + ',' + (fontSize + 2) + ')')
		    	.style('font-size', fontSize)
				.text(function (d, i) { return i + 1; })
		}

		if (this.props.type === 'treadling' || this.props.type === 'tie_up') {
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
		this.props.onUpdateSubActive(i);

		util.setUrlHash(this.props.patternNumber + '.' + i)
	}
	render() {
		if (this.state.sections > 1) {
			return (
				<div>
					<div className='content-tabs'>
						{this.props.data.map(function(section, i) {
							return (
								<button className={i == this.props.subActive ? 'selected' : ''} type='button' onMouseUp={this.changeSection.bind(this, i)}>
									{this.content['opt-' + i]}
								</button>
							)
						}.bind(this))}
					</div>
					<PatternGrid data={this.props.data[this.props.subActive]} 
						patternNumber={this.props.patternNumber}
						type={this.props.type} />
				</div>
			)
		}

		return (
			<div className='pattern-item-grid'>
				<svg ref='svg'></svg>
			</div>
		)
	}
}

export default PatternGrid;