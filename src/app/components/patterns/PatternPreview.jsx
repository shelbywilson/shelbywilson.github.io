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
    		.style('fill', 'rgba(200,200,200,0.6)')
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
    		.data(function (d) { return d; })
    		.enter()
    		.append('g')
    		.attr('class', 'weft-col')
    		.attr('transform', function(d,i){ return 'translate(' + (i * size) + ',0)'})
    		.append('rect')
    		.attr('height', function(d, i) { return d === 0 ? size - 4 : size;})
    		.attr('width', size )
    		.style('fill', function (d, i) { return d > 1 ? 'rgba(68, 164, 243, 0.5)' : d > 0 ? '#6ba4a8' : 'rgba(200,200,200,0.6)'; });
	}
	getDraft() {
		const threading = this.props.data.threading;
		const tieUp = this.props.data.tie_up;
		const treadling = this.getTreadling();
		let shafts = [];
		let draft = [];
		let empty = false;
		let arr = [];

		const emptyArr = threading[0].map(function(){ return 0; })

		treadling.forEach(function (row, i) {
			shafts = [];
			empty = true;
			row.forEach(function(val, j) {
				let shaft = j;
				if (val > 0) {
					tieUp.forEach(function(tieUpRow, k) {
						if (tieUpRow[shaft] > 0) {

							arr = threading[k].slice();

							if (val > 1) {
								arr = threading[k].map(function (x) {
									if (x > 0) {
										return val;
									}
									return x;
								})
							} 

							shafts.push(arr);
						}
					})

					draft.push(consolidateArrays(shafts));
					empty = false;
				} 
			});
			if (empty) {
				draft.push(emptyArr)
			}
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