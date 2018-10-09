import React from 'react';
import * as d3 from "d3";

import Modal from './../common/modal/Modal.jsx';

import colors from './data/colors';

function wrap(text) {
	//adapted from https://bl.ocks.org/mbostock/7555321
  text.each(function() {
	var text = d3.select(this),
		width = this.getBoundingClientRect().width,
		maxWidth = (text.data()[0].r * 2) - 5,
		x = text.attr("x"),
		y = text.attr("y");

		text.style('font-size', function(d,i) { console.log(d, i); return Math.min(12, d.r/3.5); })

		if (width > maxWidth) {

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
				.style('font-weight', 'bold').text(text.data()[0].value);
		}
	});
}

class NewsfeedAppAbout extends React.Component {
	constructor(props) {
		super(props);

		this.updateSvg = this.updateSvg.bind(this);
		this.getData = this.getData.bind(this);
	}
	componentDidMount() {
		this.updateSvg();
	}
	updateSvg() {
		let svg = d3.select(this.refs.svg);
		const data = this.getData();

		if (data.children.length > 0) {
			svg.attr('viewBox', '0 0 600 600')

			let g = svg.append('g');
			let layout = d3.pack()
				.size([600, 600])
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
			<div className='newsfeed-about container'>
				<h2>Media Diet</h2>
				<p>
					This began as a way of tracking my own bias in media consumption. By stripping stories of source, the reader is left to determine interest based on the story (headline and description) itself. This also exposes the reader to sources and topics that may not be part of their typical news diet.
				</p>
				<p>
					Approximately ten top stories of each available source are displayed in random order. They can also be sorted by most recent. Search allows a reader to determine popularity of a given search term in aggregate.
				</p>
				<p>
					The background of this page will populate as articles in a given category (defined by <a href='https://newsapi.org/' target='_blank'>{"https://newsapi.org/"}</a>) are read. It is generated using d3.js.
				</p>

				{Object.keys(this.props.count).length === 0 &&
					<p className='msg-empty'>
						Click headlines to view analysis.
					</p>
				}

				<div className='newsfeed-about-content' style={{display: (Object.keys(this.props.count).length === 0 ? 'none' : '')}}>
					<svg ref='svg'></svg>
				</div>

			</div>
		)
	}
}

export default NewsfeedAppAbout;