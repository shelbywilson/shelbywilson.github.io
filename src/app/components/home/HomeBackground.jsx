import React from 'react';
import * as d3 from "d3";
import $ from 'jquery';

const lineFunction = d3.line()
		 .x(function(d) { return d.x; })
		 .y(function(d) { return d.y; });

class HomepageBackground extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			width: window.innerWidth,
			height: window.innerHeight,
		}
	}
	componentDidUpdate(prevProps, nextProps) {
		if (prevProps.toggleReset !== this.props.toggleReset) {
			if (this.props.toggleReset === true) {
				this.updateSvg(true);
			} else {
				this.updateSvg();
			}
		}
	}
	componentDidMount() {
		window.addEventListener("resize", this.resizeSvg);
		this.setSvg();

		setTimeout(() => {
			this.updateSvg();			
		}, 1500);
		setTimeout(() => {
			$('body').addClass('loaded');
		}, 2200);
		setTimeout(() => {			
			$('.home-info-box').addClass('loaded');
		}, 2700);
	}
	componentWillUnMount() {
		window.removeEventListener("resize");
	}
	setSvg = () => {
		let svg = d3.select(this.refs.svg);
		let group;

		svg.attr('width',this.state.width);
		svg.attr('height',this.state.height);

		const data = this._getInitialData();

		group = svg.append('g')
			.attr('class', 'group');

		group.attr('transform', 'translate(' + this.state.width*0.6 + ',' + this.state.height*0.4 +')');

		group.selectAll('.line')
			.data(data)
			.enter()
			.append('path')
			.attr('class', 'line')
			.attr('d', function(d) { return lineFunction(d); })
			.attr('transform', 'rotate(0)');
	}
	updateSvg = (isReset = false) => {
		let svg = d3.select(this.refs.svg);
		const data = isReset ? this._getInitialData() : this._getUpdatedData();

		svg.attr('width',this.state.width);
		svg.attr('height',this.state.height);

		svg.selectAll('.line')
			.data(data)
			.transition()
			.attr('transform', isReset ? 'rotate(0)' : function(d,i) { return 'rotate(' + i + ')'; })
			.duration(1200)
			.attr('d', function(d) { return lineFunction(d); });
	}
	resizeSvg = () => {
		if (this.state.width !== window.innerWidth) {
			let svg = d3.select(this.refs.svg);

			svg.attr('width',this.state.width);
			svg.attr('height',this.state.height);

			svg.select('.group')
				.attr('transform', 'translate(' + this.state.width*0.6 + ',' + this.state.height*0.4 +')');

			this.setState({
				width: window.innerWidth,
				height: window.innerHeight	    		
			})
		}
	}
	_getInitialData() {
		let i = 1;
		let data = [];	
		const width = this.state.width;
		const height = this.state.height;
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

	_getUpdatedData() {
		let i = 1;
		let data = [];   	
		const width = this.state.width;
		const height = this.state.height;
		const max = Math.max(width, height);
		const h = height /30; 

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