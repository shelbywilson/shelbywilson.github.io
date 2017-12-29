import React from 'react';
import * as d3 from "d3";

function consolidateArrays(arr) {
	if (arr.length > 1) {
		let newArr = [];
		let val;
		let i;

		for (i = 0; i < arr[0].length; i += 1) {
			newArr.push(0);
		}

		arr.forEach(function(a, i) {
			a.forEach(function (val, j) {
				newArr[j] += val;
			})
		});

		return newArr;
	}
	return arr[0];
}

class PatternPreview extends React.Component {
	constructor(props) {
		super(props);

		this.updateSvg = this.updateSvg.bind(this);
		this.getTreadling = this.getTreadling.bind(this);
		this.getDraft = this.getDraft.bind(this);
	}
	componentDidMount() {
		window.addEventListener("resize", this.updateSvg);
		this.updateSvg();
	}
	componentWillUnMount() {
		window.removeEventListener("resize");
	}
	componentDidUpdate(prevProps, prevState) {
		console.log(this.props.subActive, prevProps.subActive)
		if (prevProps.data !== this.props.data || prevProps.subActive !== this.props.subActive) {
			this.updateSvg();
		}
	}
	updateSvg() {
		const size = window.innerWidth > 450 ? 22 : 16;
		const threading = this.props.data.threading;
		const treadling = this.getTreadling();

		const draft = this.getDraft();

		let svg = d3.select(this.refs.svg);
		svg.selectAll("*").remove();
	    svg.attr('width', size * (threading[0].length + 1) + 1);
	    svg.attr('height', size * (treadling.length + 1));

	    let warp = svg.append('g')
	    	.attr('class', 'warp')	    	
    		.attr('transform', 'translate(' + (size/2) + ',0)');

    	let warpCol = warp.selectAll('.warp-col')
    		.data(threading[0])
    		.enter()
    		.append('g')
    		.attr('class', 'warp-col')
    		.attr('transform', function(d,i){ return 'translate(' + (i * size) + ',0)'})
    		.append('rect')
    		.attr('height', treadling.length * size)
    		.attr('width', size - 4)
    		.style('fill', 'rgba(0,0,0,0.6)')
    		.attr('transform', 'translate(2,0)');

	    let weft = svg.append('g')
	    	.attr('class', 'weft')
    		.attr('transform', 'translate(' + (size/2) + ',0)');

    	let weftRow = weft.selectAll('.weft-row')
    		.data(draft)
    		.enter()
    		.append('g')
    		.attr('class', 'weft-row')
    		.attr('transform', function(d,i){ return 'translate(0,' + (i * size) + ')'});

    	let weftCol = weftRow.selectAll('.weft-col')
    		.data(function (d) { console.log(d); return d; })
    		.enter()
    		.append('g')
    		.attr('class', 'weft-col')
    		.attr('transform', function(d,i){ return 'translate(' + (i * size) + ',0)'})
    		.append('rect')
    		.attr('height', size)
    		.attr('width', size )
    		.style('fill', function (d, i) { return d > 0 ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.6)'; });
	}
	getDraft() {
		const threading = this.props.data.threading;
		const tieUp = this.props.data.tie_up;
		const treadling = this.getTreadling();
		let shafts = [];
		let draft = [];

		treadling.forEach(function (row, i) {
			shafts = [];
			row.forEach(function(val, j) {
				let shaft = j;
				if (val > 0) {
					tieUp.forEach(function(tieUpRow, k) {
						if (tieUpRow[shaft] > 0) {
							shafts.push(threading[k]);
						}
					})

					draft.push(consolidateArrays(shafts));
				}
			});
		});

		return draft;
	}
	getTreadling() {
		if (Array.isArray(this.props.data.treadling[0][0])) {
			return this.props.data.treadling[this.props.subActive] || this.props.data.treadling[0];
		}
		return this.props.data.treadling;
	}
	render() {
		return (
			<div className='pattern-preview pattern-item'>
				<svg ref='svg'></svg>
			</div>
		)
	}
}
export default PatternPreview;