import React, {useEffect, useRef} from 'react';
import Layers from './Layers';
import * as d3 from 'd3';

export default ({layers, state, getStyle}) => {
    const chart = useRef(null);
    const chart2 = useRef(chart2);

    const numPoints = useRef(40 * 3.5 + 1)

    const sineData = d3.range(0, numPoints.current)
        .map(x => x * Math.PI/40)
        .map((x) => {
            return {x: x, y: - Math.sin(x)};
        });

    const sineDataAlternate = sineData.map(d => ({...d, y: -d.y}));

    const xScale = d3.scaleLinear()
        .domain([0, 20])
        .range([0, 600]);

    const yScale = d3.scaleLinear()
        .domain([0, 20])
        .range([200, -290]);

    const curve = d3.line()
        .curve(d3.curveMonotoneX)
        .x( (d) => xScale(d.x))
        .y( (d) => yScale(d.y));

    const setChart = (el) => {
        const svg = el.append('g')
            .style('transform', 'translate(0, -100px)')

        const path = svg.append('g')
        path.append('path')
            .datum(sineData)
            .attr('d', curve);

        svg.append('g')
            .append('circle')
            .attr('id', 'animate-point')
            .attr('r', 4)
            .style('stroke', '#000')
            .style('transform', `translate(${xScale(sineData[0].x)}px, ${yScale(sineData[0].y)}px)`)
    }

    useEffect(() => {
        update();
    }, [state.timer])

    const update = () => {
        const i = (state.timer * 2 / 100) % sineData.length;
        const d = sineData[i];
        d3.select('#animate-point')
            .style('transition', i < 2 ? 'none' : 'transform 100ms')
            .style('opacity', i < 2 ? 0 : 1)
            .style('transform', `translate(${xScale(d.x)}px, ${yScale(d.y)}px)`)
            .transition()
                .style('fill', `rgb(${(-d.y + 1) * 128}, ${(-d.y + 1) * 128}, ${(-d.y + 1) * 128})`)
                .duration(100)
    }

    const setChart2 = () => {
        const svg = d3.select(chart2.current)
            .append('g')
            .style('height', 300)
            .style('transform', 'translate(0, -100px)')

        const path = svg.append('g')

        path.append('path')
            .datum(sineData)
            .attr('d', curve)
        
        addPoints(path, sineData)

        const path2 = svg.append('g')
            
        path2.append('path')
            .datum(sineDataAlternate)
            .attr('d', curve)

        addPoints(path2, sineDataAlternate)
    }

    const addPoints = (svg, data) => {
        const layer1 = svg.append('g')
            .selectAll('.layer-1')
            .data(data.filter(d => d.y === 1))
            .enter()
            .append('g')
        
        layer1.style('transform', d => `translate(${xScale(d.x)}px, ${yScale(d.y)}px)`)
            .append('circle')
            .attr('r', 5)
            .style('fill', '#000')

        const layer2 = svg.append('g')
            .selectAll('.layer-2')
            .data(data.filter(d => d.y === -1))
            .enter()
            .append('g')
        
        layer2.style('transform', d => `translate(${xScale(d.x)}px, ${yScale(d.y)}px)`)
            .append('circle')
            .attr('r', 4)
            .style('fill', '#fff')
            .style('stroke', '#000')
            .style('stroke-width', 1)
    }
    
    useEffect(() => {
        setChart(d3.select(chart.current));
        setChart2();
    }, [])

    return (
        <div className='gradients-explanation'>
            <p>
                Gradients created with CSS cannot be animated, meaning an HTML element styled with a gradient background cannot gradually transition from one gradient to another over time.  Other CSS properties, however, <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties" target="_blank">can be animated</a>. The method described below leverages opacity and solid backgrounds to create the appearance of smoothly transitioning gradients, using stacked layers that fade in and out.
            </p>
            <Layers layers={[layers[0], layers[1]]}
                state={state}
                getStyle={getStyle}
                />
            <p>
                These layered gradients are partially transparent and are stacked on top of a single base layer, a solid color that continously transitions to the next color. This creates a seemless animation between gradients.
            </p>

            <svg style={{width: numPoints.current * 2.4 + 'px'}} className='gradients-chart' ref={chart}>
            </svg>

            <p>
                Layers have alternating cycles of opacity. When a layer is fully transparent, a new gradient style is applied to the hidden layer. 
            </p>

            <svg style={{width: numPoints.current * 2.4 + 'px'}} className='gradients-chart' ref={chart2}>
            </svg>
        
            <p>
                While one layer fades in, the other fades out so that at any time the sum of the two layers' opacity is 1.
            </p>

            <div style={{width: 260, height: 260, position: 'relative', margin: '60px auto', border: '1px solid #000'}}>
                <div style={{...getStyle(state.opacity, layers[state.opacity]), opacity: 1, zIndex: 1, position: 'absolute', height: '100%', width: '100%'}}>
                </div>
                <div style={{...getStyle((state.opacity + 1)%2, layers[(state.opacity + 1)%2]), opacity: 1, zIndex: 2, position: 'absolute', height: '100%', width: '100%'}}>
                </div>
                <div style={{...getStyle('base', state.base), transition: 'none', position: 'absolute', height: '100%', width: '100%'}}>
                </div>
            </div>

            <p>
                Without timing new gradients with a layer's opacity, there is no easing between states. Each new gradient appears immediately.
            </p>

            <Layers layers={layers}
                state={state}
                getStyle={getStyle}
                />

            <p>
                Any number of gradients can be added to each layer.
            </p>
        </div>
    )
}