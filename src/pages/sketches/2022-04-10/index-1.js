import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import Perlin from 'perlin.js';

const SIZE = 73;

const getNoise = (noisy) => {
    Perlin.seed(Math.random());

    const arr = [];
    const w = SIZE;
    const h = SIZE;

    for (let x = 0; x < w; x++) {
        const row = [];
        for (let y = 0; y < h; y++) {
            row.push(
                noisy ? Perlin.simplex2(x / 100, y / 100) + ((SIZE/2 - y)/100) : 0
            )
        }

        arr.push(row);
    }
    
    return arr;
}

export const Sketch = () => {
    const svgNode = useRef(null)

    useEffect(() => {
        update();

        let interval = setInterval(() => {
            update();
        }, 5000)

        return () => {
            clearInterval(interval);
        }
    }, [])

    const update = () => {
        const svg = d3.select(svgNode.current)
        const noisy = svg.attr('data-noisy') === 'false';

        svg.attr('data-noisy', noisy)

        const noise = getNoise(noisy);

        d3.select(svgNode.current)
            .selectAll('path')
            .data(noise)
            .join('path')
            .transition()
            .duration(noisy ? 600 : 1000)
                .delay((_,i) => noisy ? (SIZE - i) * 2 : 0)
                .attr('d', (d,i) => getPath(d,i, noisy))
    }

    const scaleY = d3.scaleLinear()
        .domain([-1, 1])
        .range([SIZE * 0.2, SIZE * 0.8])

    const getPath = (row, i, noisy) => {
        let str = '';
        row.forEach((y,j) => {
            str += `${j === 0 ? 'M' : 'L'} ${j * (100/SIZE)},${(!noisy ? i : scaleY(y)) * (100/SIZE)}`
        })

        return str;
    }

    const rows = () => {
        let arr = [];

        while(arr.length < SIZE) {
            arr.push(
                <g key={arr.length}>
                    <path style={{
                        stroke: '#00f', 
                        strokeWidth: 0.35, 
                        strokeDasharray: `0 ${(arr.length%4 !== 0 ? 1.05 * 6 : 1)}`, 
                        strokeDashoffset: 1.5, 
                        strokeLinecap: 'round', 
                        fill: 'none',
                    }}></path>
                </g>
            )
        }

        return arr;
    }

    return (
        <div>
            <svg viewBox='0 0 100 100' ref={svgNode} style={{padding: 10, overflow: 'visible'}}>
                <g style={{transform: 'translate(1px, 1px)'}}>
                    {rows()}
                </g>
            </svg>
        </div>
    )
}

export default Sketch;