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
	            .attr('y', function (d) { return d.y; })
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

		let i;
		let j;
		for (i in this.props.count) {
			temp = [];
			for (j in this.props.countBySource) {
				if (this.props.sourcesDictionary[j].category === i) {
					temp.push({
						category: this.props.sourcesDictionary[j].category,
						name: this.props.sourcesDictionary[j].name,
						value: this.props.countBySource[j],
						color: 'rgba(255,255,255,0.25)'
					});
				}
			}
			children.push({
				name: i,
				color: colors[i],
				children: temp
			})
		}


		// let temp = [];
		// let data = {};
		// let i;

		// for (i in this.props.countBySource) {
		// 	data.push({
		// 		category: this.props.sourcesDictionary[i].category,
		// 		name: this.props.sourcesDictionary[i].name,
		// 		value: this.props.countBySource[i],
		// 		color: colors[this.props.sourcesDictionary[i].category]
		// 	});
		// }

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