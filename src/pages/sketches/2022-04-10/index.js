import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import Perlin from 'perlin.js';
import { shuffle } from 'd3';

const SIZE = 50;

const getNoise = (noisy) => {
    Perlin.seed(Math.random());

    let arr = [];
    const w = SIZE;
    const h = SIZE;

    for (let y = 0; y < w; y++) {
        let row = [];
        for (let x = 0; x < h; x++) {
            row.push(
                {
                    y: noisy ? Perlin.simplex2(x / 100, y / 100) : y,
                    x: x,
                }
            )
        }

        if (!noisy) {
            row = shuffle(row)
        }

        arr.push(row);
    }

    if (!noisy) {
        arr = shuffle(arr);
    }
    
    return arr;
}

export const Sketch = () => {
    const svgNode = useRef(null)

    useEffect(() => {
        update(false);

        let interval = setInterval(() => {
            update();
        }, 5000)

        return () => {
            clearInterval(interval);
        }
    }, [])

    const scaleSize = d3.scaleLinear()
        .domain([0, SIZE])
        .range([0, 100])

    const scaleNoiseY = d3.scaleLinear()
        .domain([-1, 1])
        .range([0.2 * 100, 0.8 * 100])

    const update = (animate = true) => {
        const svg = d3.select(svgNode.current)
        const noisy = svg.attr('data-noisy') === 'false';

        svg.attr('data-noisy', noisy)

        const noise = getNoise(noisy);

        d3.select(svgNode.current)
            .selectAll('g')
            .data(noise)
            .join('g')
                .selectAll('circle')
                .data(d => d)
                .join('circle')
                .attr('r', 0.1)
                .style('fill', '#000')
                .transition()
                .duration(animate ? 1000 : 0)
                .attr('cx', d => scaleSize(d.x))
                .attr('cy', d => noisy ? scaleNoiseY(d.y) : scaleSize(d.y))
        //     .selectAll('path')
        //     .data(noise)
        //     .join('path')
        //     .transition()
        //     .duration(1000)
        //     // .delay((_,i) => i * 100)
        //         .attr('d', (d,i) => getPath(d,i, noisy))
    }


    // const getPath = (row, i, noisy) => {
    //     let str = '';
    //     row.forEach((y,j) => {
    //         str += `${j === 0 ? 'M' : 'L'} ${j * (100/SIZE)},${(!noisy ? i : scaleY(y)) * (100/SIZE)}`
    //     })

    //     return str;
    // }

    return (
        <div>
            <svg viewBox='0 0 100 100' ref={svgNode}>
            </svg>
        </div>
    )
}

export default Sketch;