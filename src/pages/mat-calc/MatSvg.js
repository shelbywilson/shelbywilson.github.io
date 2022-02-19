import React from 'react';
import DecimalToFraction from './DecimalToFraction';

export const MatSvg = ({ matSize, image, imageBorder, bottomWeight, maxFrameSize }) => {
    const margin = {
        t: 20,
        r: 90,
        b: 40,
        l: 90,
    }
    const position = {
        l: (matSize[0] - image[0])/2,
        r: (matSize[0] - image[0])/2,
        t: (matSize[1] - image[1])/2 - bottomWeight,
        b: (matSize[1] - image[1])/2 + bottomWeight,
    }

    const unit = (maxFrameSize[0]/matSize[0] + maxFrameSize[1]/matSize[1]) * 0.5 * 20

    return (
        <svg viewBox={`${-margin.l} ${-margin.t} ${matSize[0] * unit + margin.r + margin.l} ${matSize[1] * unit + margin.t + margin.b}`} 
            style={{maxHeight: 'calc(100vh - 300px)'}}
            className="w-100 h-100">
            <g style={{transform: `translate(${margin.x}px, ${margin.t}px)`}}>
                <rect width={image[0] * unit} 
                    height={image[1] * unit}
                    x={position.l * unit}
                    y={position.t * unit}
                    style={{fill: '#78d98c'}}
                    ></rect>
                <path d={`
                    M0,0 
                    L${matSize[0] * unit},0 
                    L${matSize[0] * unit},${matSize[1] * unit}
                    L0,${matSize[1] * unit} 
                    z 
                    M${(position.l + imageBorder[0]) * unit},${(position.t + imageBorder[1]) * unit}
                    l0,${(image[1] - (imageBorder[1] * 2)) * unit} 
                    l${(image[0] - (imageBorder[0] * 2)) * unit},0
                    l0,${(image[1] - (imageBorder[1] * 2)) * unit * -1}
                    z 
                `}
                style={{stroke: '#000', fill: 'rgba(240,248,255,0.8)', fillRule: 'evenodd'}}
                ></path> 
            </g>
            <g>
                {['t', 'b'].map((pos) => {
                    const side = imageBorder[1] + position[pos];
                    
                    if (pos === 'b' && bottomWeight === 0) {
                        return null;
                    }

                    return (
                        <g key={pos} style={{transform: pos === 'b' ? `translate(0, ${(matSize[1] - side) * unit}px)` : ''}}>
                            <g style={{transform: `translate(${matSize[0]/2 * unit}px, ${0}px)`}}>
                                <line style={{stroke: '#000', strokeWidth: 1}}
                                    x1="0" 
                                    y1="0" 
                                    y2={side * unit}
                                ></line>
                                <line style={{stroke: '#000', strokeWidth: 1, strokeDasharray: '5 4'}}
                                    x1="0" 
                                    x2={matSize[0]/2 * unit + 30}
                                    y1={side * unit * 0.5}
                                    y2={side * unit * 0.5}
                                ></line>
                            </g>
                            <g style={{transform: `translate(${matSize[0] * unit}px, ${side * unit * 0.5}px)`}}>
                                <g style={{transform: `translate(${30 + 6}px, ${4}px)`}}>
                                    <DecimalToFraction decimal={side} 
                                        svg={true}
                                        />
                                </g>
                            </g>
                        </g>
                    )
                })}
                {['l'].map((pos) => {
                    const side = imageBorder[0] + position[pos];

                    return (
                        <g key={pos} style={{transform: `translate(${matSize[0] * unit}px, ${(matSize[1]/2 - bottomWeight) * unit}px)`}}>
                            <g style={{transform: `translate(${0}px, ${0}px)`}}>
                                <line style={{stroke: '#000', strokeWidth: 1}}
                                    y1="0" 
                                    x1="0" 
                                    x2={-side * unit}
                                ></line>
                                <line style={{stroke: '#000', strokeWidth: 1 , strokeDasharray: '5 4'}}
                                    x1="0" 
                                    x2={30}
                                    y1={0}
                                    y2={0}
                                ></line>
                            </g>
                            <g style={{transform: `translate(${30 + 6}px, ${4}px)`}}>
                                <DecimalToFraction decimal={side} 
                                    svg={true} />
                            </g>
                        </g>
                    )
                })}
            </g>
            <g style={{transform: `translate(${-12}px, 0)`}}>
                <line style={{stroke: '#000', strokeWidth: 1}}
                    y1="0"
                    y2="0"
                    x1="-6"
                    x2="6"
                    ></line>
                <line style={{stroke: '#000', strokeWidth: 1}}
                    y1="0"
                    y2={matSize[1] * unit}
                    x1="0"
                    ></line>
                <line style={{stroke: '#000', strokeWidth: 1}}
                    y1={matSize[1] * unit}
                    y2={matSize[1] * unit}
                    x1="-6"
                    x2="6"
                    ></line>
                <g style={{transform: `translate(${-10}px, ${matSize[1]/2 * unit + 4}px)`, textAnchor: 'end'}}>
                    <DecimalToFraction decimal={matSize[1]} 
                        svg={true} />
                </g>
            </g>
            <g style={{transform: `translate(${0}px, ${matSize[1] * unit + 12}px)`}}>
                <line style={{stroke: '#000', strokeWidth: 1}}
                    x1="0"
                    x2="0"
                    y1="-6"
                    y2="6"
                    ></line>
                <line style={{stroke: '#000', strokeWidth: 1}}
                    x1="0"
                    x2={matSize[0] * unit}
                    y1="0"
                    ></line>
                <line style={{stroke: '#000', strokeWidth: 1}}
                    x1={matSize[0] * unit}
                    x2={matSize[0] * unit}
                    y1="-6"
                    y2="6"
                    ></line>
                <g style={{transform: `translate(${matSize[0]/2 * unit}px, ${20}px)`, textAnchor: 'start'}}>
                    <DecimalToFraction decimal={matSize[0]} 
                        svg={true} />
                </g>
            </g>
        </svg> 
    )
}

export default MatSvg;