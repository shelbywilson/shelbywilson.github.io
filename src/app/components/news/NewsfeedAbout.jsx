import React from 'react';
import * as d3 from "d3";

import ToggleAbout from './../common/header/ToggleAbout.jsx';

import colors from './data/colors';

function wrap(text) {
	//adapted from https://bl.ocks.org/mbostock/7555321
  text.each(function() {
    var text = d3.select(this),
    	width = this.getBoundingClientRect().width,
    	maxWidth = (text.data()[0].r * 2) - 5,
    	fontSize = 0.65,
        x = text.attr("x"),
        y = text.attr("y");

    if (width > maxWidth) {
    	if (maxWidth < 70) {
    		fontSize = 0.45;
    	}
    	text.style('font-size', fontSize + 'rem');

    	var words = text.text().split(/\s+/).reverse(),
    		word,
	        line = [],
	        lineNumber = 0,
	        lineHeight = 1.1, // ems
	        dy = 0,
	        tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");

	    while (word = words.pop()) {
	      line.push(word);
	      tspan.text(line.join(" "));
	      if (tspan.node().getComputedTextLength() > maxWidth) {
	        line.pop();
	        tspan.text(line.join(" "));
	        line = [word];
	        tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
	      }
	    }
    }

    if (!text.data()[0].children) {
    	text.append('tspan')
    		.attr("x", x)
    		.attr("y", y)
    		.attr('dy', '-1.4em')
    		.style('font-size', '0.65rem')
    		.style('font-weight', 'bold').text(text.data()[0].value);
    }
  });
}

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
		const data = this.getData();

		if (data.children.length > 0) {
		    //const sum = data.children.reduce((a, b) => a + b.value, 0);
		    const height = this.refs.container.clientHeight - 20;
		    const width = this.refs.container.clientWidth - 20;
		    svg.attr('width', width);
		    svg.attr('height', height);

		    let g = svg.append('g');
		    let layout = d3.pack()
		    	.size([width, height])
		    	.padding(5);

	        let root = d3.hierarchy(data)
	        	.sum(function (d) { return d.value; });

	        let nodes = root.descendants();
	        layout(root);

	        let group = g.selectAll('g')        	
	        	.data(nodes)
	        	.enter()
	        	.append('g');

	        group.append('circle')
	        	.style('fill', function(d,i) {return d.data.color || 'none';})
	        	.attr('cx', function (d) { return d.x; })
	            .attr('cy', function (d) { return d.y; })
	            .attr('r', function (d) { return d.r; });

	        group.append('text')  
	        	.attr('class', 'label')
	        	.attr('x', function (d) { return d.x; })
	            .attr('y', function (d) { return d.y + 3; })
	        	.text(function(d) { return d.children ? '' : d.data.name; })
	        	.style('text-anchor', 'middle')	        	
	        	.call(wrap);
	    }
	}
	triggerUpdate() {
		this.setState({
			update: !this.state.update
		})
	}
	getData() {
		let data;
		let temp;
		let children = [];
		let source;
		let category;

		for (category in this.props.count) {
			temp = [];
			for (source in this.props.countBySource) {
				if (this.props.sourcesDictionary[source].category === category) {
					temp.push({
						category: this.props.sourcesDictionary[source].category,
						name: this.props.sourcesDictionary[source].name,
						value: this.props.countBySource[source],
						color: 'rgba(255,255,255,0.25)'
					});
				}
			}
			children.push({
				name: category,
				color: colors[category],
				children: temp
			})
		}

		return {children: children};
	}
	render() {
		return (
			<ToggleAbout onUpdate={this.triggerUpdate}>
				<div className='newsfeed-about' ref='container'>
					<svg ref='svg'></svg>
				</div>
			</ToggleAbout>
		)
	}
}

export default NewsfeedAbout;