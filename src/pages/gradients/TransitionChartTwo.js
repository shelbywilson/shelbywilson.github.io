import React, {useEffect, useRef } from 'react';
import * as d3 from 'd3';

import * as SineWave from './d3/sine-wave-util';

export default ({}) => {
    const chart = useRef(null);

    const sineDataAlternate = SineWave.data.map(d => ({...d, y: -d.y}));

    const setChart = () => {
        const svg = d3.select(chart.current)
            .append('g')
            .style('height', 300)
            .style('transform', 'translate(0, -100px)')

        const path = svg.append('g')

        path.append('path')
            .datum(SineWave.data)
            .attr('d', SineWave.curve)
        
        addPoints(path, SineWave.data)

        const path2 = svg.append('g')
            
        path2.append('path')
            .datum(sineDataAlternate)
            .attr('d', SineWave.curve)

        addPoints(path2, sineDataAlternate)
    }

    const addPoints = (svg, data) => {
        const layer1 = svg.append('g')
            .selectAll('.layer-1')
            .data(data.filter(d => d.y === 1))
            .enter()
            .append('g')
        
        layer1.style('transform', d => `translate(${SineWave.xScale(d.x)}px, ${SineWave.yScale(d.y)}px)`)
            .append('circle')
            .attr('r', 5)
            .style('fill', '#000')

        const layer2 = svg.append('g')
            .selectAll('.layer-2')
            .data(data.filter(d => d.y === -1))
            .enter()
            .append('g')
        
        layer2.style('transform', d => `translate(${SineWave.xScale(d.x)}px, ${SineWave.yScale(d.y)}px)`)
            .append('circle')
            .attr('r', 4)
            .style('fill', '#fff')
            .style('stroke', '#000')
            .style('stroke-width', 1)
    }
    
    useEffect(() => {
        setChart();
    }, [])

    return (
        <div className='gradients-transition-chart'>
            <svg style={{width: SineWave.data.length * 2.4 + 'px'}} className='gradients-chart' ref={chart}>
            </svg>
        </div>
    )
}