import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import { sliderBottom } from 'd3-simple-slider';

export const Corners = () => {
    const container = useRef(null);
    const [angle, setAngle] = useState(90);
    const [init, setInit] = useState(false);
    const width = 460;
    const height = 340;

    useEffect(() => {
        if (container.current && !init) {
            const svg = d3.select(container.current)
                // .append('svg')
                // .attr('viewBox', '0 0 460 340')
                // .style('width', '100%')
                // .style('height', '1px')
                // .style('overflow', 'visible')
                // .attr('preserveAspectRatio', 'xMidYMin slice')
                // .style('padding-bottom', (height/width * 100) + '%')
                .append('g')

            const scale = d3.scaleLinear()
                .domain([0, 360])
                .range([0, 360])

            // @ts-ignore
            const slider = sliderBottom(scale).step(1)
                .ticks(0)
                .tickFormat('')
                .default(angle)
                .on('onchange', setAngle)
                .displayFormat((d: number) => `${d > 180 ? 360 - d : d}°`)
            
            svg.append('g')
                .style('transform', 'translate(50px,30px)')
                .call(slider)

            const lines = svg.append('g')
                .style('transform', `translate(250px, 200px)`)

            lines.append('path')
                .attr('id', 'corner-arc')

            lines.append('line')
                .style('stroke', '#000')
                .attr('x1', 0)
                .attr('x2', 120)
                .attr('y1', 0)
                .attr('y2', 0)

            lines.append('line')
                .style('stroke', '#000')
                .style('transform', `rotate(${angle}deg)`)
                .attr('id', 'corner-change-angle')
                .attr('x1', 0)
                .attr('x2', 120)
                .attr('y1', 0)
                .attr('y2', 0)

            lines.append('text')
                .text('el rincón')
                .attr('id', 'corner-label-rincon')
                .style('transform', `translate(-30px, 20px)`)

            lines.append('text')
                .text('la esquina')
                .attr('id', 'corner-label-esquina')
                .style('transform', `translate(-70px, -10px)`)
                .style('text-anchor', 'end')

            setInit(true)
            slider.value(90);
        }
    }, [container.current])

    useEffect(() => {
        d3.select('#corner-change-angle')
            .style('transform', `rotate(${angle}deg)`)

        d3.select('#corner-label-rincon')
            .style('transform', `translate(${
                angle < 54 ? 
                    Math.min(125, 20 + ((54 - angle) * 2.5))
                :  angle > 306 ? 
                    Math.min(125, 20 + ((angle - 306) * 2.5))
                : 20
                }px, ${angle > 180 ? -10 : 20}px)`)
            .text(angle%180 === 0 ? '' : 'el rincón')

        d3.select('#corner-label-esquina')
            .style('transform', `translate(-20px, ${angle < 180 ? -10 : 20}px)`)
            .text(angle%180 === 0 ? '' : 'la esquina')

        const arc = d3.arc() 
            .innerRadius(16) 
            .outerRadius(20) 
            .startAngle(0) 
            .endAngle((angle > 180 ? 360 - angle : angle) * Math.PI/180)
        
        // @ts-ignore
        d3.select('#corner-arc').attr('d', arc) 
            .attr('fill','lavender')
            .style('transform', `rotate(${angle < 180 ? 90 : -270 + angle}deg)`)
            
    }, [angle])

    return (
        <div className='corners' 
            >
            <div 
                style={{maxWidth: width, margin: '0 auto'}}
                >
                <svg viewBox={`0 0 ${width} ${height}`}
                    preserveAspectRatio="none"
                    style={{width: '100%'}}
                    ref={container}>

                </svg>

            </div>
        </div>
    )
}

export default Corners;