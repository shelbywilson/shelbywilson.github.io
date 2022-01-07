import React, { Fragment, useState, useEffect } from 'react';
import { COLUMNS, ROWS, CELL_SIZE } from './common';

interface IProps {
    me: Array<number>,
    secondary?: boolean,
}

export const Possibilities = ({me, secondary = false}: IProps) => {
    const [showSecondary, setShowSecondary] = useState<Array<number>>([]);

    useEffect(() => {
        setShowSecondary([])
    }, [me])

    const inSight = (x: number, y: number): boolean => {
        const t = [-1,1,-2,2];

        for (let i = 0; i < t.length; i += 1) {
            for (let j = 0; j < t.length; j += 1) {
                if (Math.abs(t[i]) !== Math.abs(t[j])) {
                    if (x === me[0] + t[i] && y === me[1] + t[j]) {
                        return true;
                    }
                }
            }
        }

        return false;
    }

    return (
        <g>
            {COLUMNS.map((col,y) => (
                <Fragment key={col}>
                    {ROWS.map((row, x) => (
                        <Fragment key={row}>
                            {inSight(x, y) && (showSecondary.length === 0 || showSecondary[0] === x && showSecondary[1] === y) &&
                                <Fragment>
                                    {showSecondary.length > 0 &&
                                        <Possibilities me={showSecondary}
                                            secondary={true}
                                            />
                                    }
                                    <line x1={me[0] * CELL_SIZE} 
                                        x2={x * CELL_SIZE} 
                                        y1={me[1] * CELL_SIZE} 
                                        y2={y * CELL_SIZE} 
                                        style={{stroke: secondary ? '#9292ff' : 'red', strokeWidth: 2, transform: `translate(${CELL_SIZE/2}px, ${CELL_SIZE/2}px)`}}
                                        />
                                    <g style={{transform: `translate(${x * CELL_SIZE}px, ${y * CELL_SIZE}px)`}}>
                                        <rect style={{height: CELL_SIZE, width: CELL_SIZE, fill: 'transparent'}}
                                            onMouseEnter={() => setShowSecondary([x,y])}
                                            >
                                        </rect>
                                        <circle r={secondary ? 3: 5} 
                                            style={{fill: secondary ? '#9292ff' : 'red'}}
                                            cx={`${CELL_SIZE/2}`}
                                            cy={`${CELL_SIZE/2}`}
                                            >
                                        </circle>
                                    </g>
                            </Fragment>
                            }
                        </Fragment>
                    ))}
                </Fragment>
            ))}
        </g>
    )
}