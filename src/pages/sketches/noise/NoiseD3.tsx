import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
// @ts-ignore
import Perlin from 'perlin.js';

import "./_noise.scss";

interface Color {
    r: number,
    g: number,
    b: number,
}

export default () => {
    const container = useRef(null);
    const [init, setInit] = useState(false);

    const h = 48;
    const w = 48;
    const size = 8;

    const rScale = d3.scaleLinear()
        .domain([-1, 1])
        .range([120, 255])

    const gScale = d3.scaleLinear()
        .domain([-1, 1])
        .range([130, 185])

    const getNoise = ():Array<Array<Color>> => {
        Perlin.seed(Math.random());

        let arr = [];
 
        for (let x = 0; x < w; x++) {
            let row = [];
            for (let y = 0; y < h; y++) {
                const r = Perlin.simplex2(x / 100, y / 100);
                const g = 0.7;
                // const g = Perlin.simplex2(y / 100, x / 100)
                // const g = Perlin.simplex2(r / 100, new Date().getMilliseconds() % 100);
                const b = 0.55;

                row.push({
                    r: rScale(r), 
                    g: gScale(g),
                    b: b * 255,
                })
            }

            arr.push(row);
        }
        
        return arr;
    }

    const [noise, setNoise] = useState(getNoise());

    useEffect( () => {
        let interval = setInterval(() => {
            setNoise(getNoise)
        }, 4000)

        return () => {
            clearInterval(interval);
        }
    }, [])

    useEffect(() => {
        if (container.current && !init) {
            const svg = d3.select(container.current)
                .append('svg')
                .attr('id', 'tapestry-svg')

            svg.attr('viewBox', `0 0 ${w * size} ${h * size}`)
                .attr('preserveAspectRatio', "xMidYMid meet")
                .style('max-width', `${w * size}px`)
                .style('margin', '0 auto')
                .style('display', 'block')

            const rows = svg.append('g')
                .selectAll('.row')
                .data(noise)
                .enter()
                .append('g')
                .attr('class', 'row')
                .style('transform', (d, i) => `translate(0, ${i * size}px)`)

            rows.selectAll('rect')
                .data((d: Array<Color>) => d)
                .enter()
                .append('rect')
                .style('transform', (d: Color, i) => `translate(${i * size}px, 0)`)
                .attr('height', size)
                .attr('width', size)
                .style('fill', d => `rgb(${d.r},${d.g},${d.b})`)

            setInit(true)
        }
    }, [container.current])

    useEffect(() => {
        const svg = d3.select(`#tapestry-svg`)

        const rows = svg.selectAll('.row')
            .data(noise)

        rows.selectAll('rect')
            .attr('class', 'update')
            .data((d: Array<Color>) => d)
            .transition()
            .duration((d,i) => 300 + (d.r * 20))
            .style('fill', d => `rgb(${d.r},${d.g},${d.b})`)

    }, [noise])

    return (
        <div className='noise-d3' ref={container}>
        </div>
    )
}