import React, {useEffect, useRef, useState} from 'react';
import * as d3 from 'd3';

import * as SineWave from './d3/sine-wave-util';

export default ({}) => {
    const chart = useRef(null);
    const [timer, setTimer] = useState(0);

    const setChart = () => {
        const svg = d3.select(chart.current)
            .append('g')
            .style('transform', 'translate(0, -100px)')

        const path = svg.append('g')
        path.append('path')
            .datum(SineWave.data)
            .attr('d', SineWave.curve);

        svg.append('g')
            .append('circle')
            .attr('id', 'animate-point')
            .attr('r', 4)
            .style('stroke', '#000')
            .style('transform', `translate(${SineWave.xScale(SineWave.data[0].x)}px, ${SineWave.yScale(SineWave.data[0].y)}px)`)
    }

    useEffect(() => {
        if (timer !== 0) {
            update();
        }
    }, [timer])

    const update = () => {
        const i = (timer * 2 / 100) % SineWave.data.length;
        const d = SineWave.data[i];
        d3.select('#animate-point')
            .style('opacity', i < 2 ? 0 : 1)
            .style('transition', i < 2 ? 'none' : 'transform 100ms, fill 100ms')
            .style('transform', `translate(${SineWave.xScale(d.x)}px, ${SineWave.yScale(d.y)}px)`)
            .style('fill', `rgb(${(-d.y + 1) * 128}, ${(-d.y + 1) * 128}, ${(-d.y + 1) * 128})`)
    }
    
    useEffect(() => {
        setChart();
    }, [])

    useEffect(() => {
        let id = setInterval(() => {
            setTimer(prev => prev += 100);
          }, 100);
          return () => clearInterval(id);
    }, [])

    return (
        <div className='gradients-transition-chart'>
            <svg style={{width: SineWave.data.length * 2.4 + 'px'}} className='gradients-chart' ref={chart}>
            </svg>
        </div>
    )
}