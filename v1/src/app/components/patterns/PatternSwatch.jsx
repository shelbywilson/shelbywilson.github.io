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

function isSecondary(rows, index) {
	let i;

	for (i = 0; i < rows.length; i += 1) {
		if (rows[i][index] === 2) {
			return true;
		}
	}

	return false;
}

class PatternSwatch extends React.Component {
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
		const size = (window.innerWidth > 450 ? 12 : 8) * (this.props.data.threading[0].length > 24 ? 0.65 : 1);
		const threading = this.props.data.threading;
		const treadling = this.getTreadling();

		const draft = this.getDraft();

		let svg = d3.select(this.refs.svg);
		svg.selectAll("*").remove();
	    svg.attr('width', size * (threading[0].length + 1) + 1);
	    svg.attr('height', size * (treadling.length + 1));

	    let warp = svg.append('g')
	    	.attr('class', 'warp')	    	
    		.attr('transform', 'translate(' + (size/2) + ',' + (size/2) + ')');

    	let warpCol = warp.selectAll('.warp-col')
    		.data(threading[0])
    		.enter()
    		.append('g')
    		.attr('class', function(d, i) { return (isSecondary(threading, i) ? 'secondary ' : '') + 'warp-col'; })
    		.attr('transform', function(d,i){ return 'translate(' + (i * size) + ',' + (size/5) + ')'})
    		.append('rect')
    		.attr('height', (treadling.length * size) - size)
    		.attr('width', size * 0.8)
    		.attr('transform', 'translate(' + (size/10) + ',0)');

	    let weft = svg.append('g')
	    	.attr('class', 'weft')
    		.attr('transform', 'translate(' + (size/2) + ',' + (size/2) + ')');

    	let weftRow = weft.selectAll('.weft-row')
    		.data(draft)
    		.enter()
    		.append('g')
    		.attr('class', function(d,i) { return (treadling[i].indexOf(2) > -1 ? 'contrast ' : '') + 'weft-row'; })
    		.attr('transform', function(d,i){ return 'translate(0,' + (i * size) + ')'});

    	let weftCol = weftRow.selectAll('.weft-col')
    		.data(function (d) { return d; })
    		.enter()
    		.append('g')
    		.attr('class', function (d, i) { return (d > 1 ? 'secondary' : d > 0 ? 'primary' : 'default') + ' weft-col'; })
    		.attr('transform', function(d,i){ return 'translate(' + (i * size) + ',0)'})
    		.append('rect')
    		.attr('height', function(d, i) { return d === 0 ? size * 0.8 : size;})
    		.attr('width', size );

    	weftRow.selectAll('.weft-col.primary, .weft-col.secondary')
    		.append('line')
    		.attr('x1', -0.5)
    		.attr('x2', -0.5)
    		.attr('y1', 0)
    		.attr('y2', size);
    	weftRow.selectAll('.weft-col.primary, .weft-col.secondary')
    		.append('line')
    		.attr('x1', size - 0.5)
    		.attr('x2', size - 0.5)
    		.attr('y1', 0)
    		.attr('y2', size);
	}
	getDraft() {
		const threading = this.props.data.threading;
		const tieUp = this.props.data.tie_up;
		const treadling = this.getTreadling();
		let shafts = [];
		let draft = [];
		let empty = false;
		let arr = [];
		let temp;

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

							shafts.push(arr);
						}
					});

					temp = consolidateArrays(shafts);

					if (temp) {
						draft.push(temp);
						empty = false;
					}
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
			<div className='pattern-swatch'>
				<div className='pattern-item-section'>
					<svg ref='svg'></svg>
				</div>
			</div>
		)
	}
}
export default PatternSwatch;