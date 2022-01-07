import React, { useState } from 'react';
import './_knights.scss';
import { Possibilities } from './Possibilities';
import { CELL_SIZE, COLUMNS, ROWS } from './common';

const padding = CELL_SIZE * 3/4;

export const Knights = () => {
    const [position, setPosition] = useState([2,4])

    return (
        <div className='knights'>
            <svg style={{height: CELL_SIZE * 8 + (padding), width: CELL_SIZE * 8 + (padding)}}>
                <g style={{transform: `translate(${padding}px, 0)`}}>
                    {ROWS.map((row, y) => (
                        <g key={row} 
                            style={{transform: `translate(0, ${y * CELL_SIZE}px)`, height: CELL_SIZE, width: CELL_SIZE}}
                            className='row'>
                            <g style={{transform: `translate(${-padding}px, ${padding}px)`}}>
                                <rect>

                                </rect>
                                <text>
                                    {row}
                                </text>
                            </g>
                            {COLUMNS.map((col, x) => (
                                <g key={`cell_${col}`} 
                                    className='cell'
                                    style={{transform: `translate(${x * CELL_SIZE}px, 0)`}}
                                    onClick={() => setPosition([x, y])}
                                    >
                                    <rect style={{height: CELL_SIZE, width: CELL_SIZE}}
                                        >
                                    </rect>
                                    {x === position[0] && y === position[1] &&
                                        <circle r="8" 
                                            cx={`${CELL_SIZE/2}`}
                                            cy={`${CELL_SIZE/2}`}
                                            style={{fill: 'red'}}>

                                        </circle>
                                    }
                                </g>
                            ))}
                        </g>
                    ))}
                    <g style={{transform: `translate(0, ${CELL_SIZE * 8 + 15}px)`}}>
                        {COLUMNS.map((col, i) => (
                            <g style={{transform: `translate(${CELL_SIZE * i}px, 0)`}}
                                key={`${col}`}>
                                <rect>

                                </rect>
                                <text>
                                    {col}
                                </text>
                            </g>
                        ))}
                    </g>
                    <Possibilities me={position}
                        />
                </g>
            </svg>
        </div>
    )
}