import * as d3 from 'd3';

const numPoints = 40 * 3.5 + 1;

export const data = d3.range(0, numPoints)
    .map(x => x * Math.PI/40)
    .map((x) => {
        return {x: x, y: - Math.sin(x)};
    });

export const xScale = d3.scaleLinear()
    .domain([0, 20])
    .range([0, 600]);

export const yScale = d3.scaleLinear()
    .domain([0, 20])
    .range([200, -290]);

export const curve = d3.line()
    .curve(d3.curveMonotoneX)
    .x( (d) => xScale(d.x))
    .y( (d) => yScale(d.y));