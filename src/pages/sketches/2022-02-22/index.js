import React, { useState, useEffect } from 'react';

const getGrid = (size = 12) => {
    let rows = [];
    
    while (rows.length < size) {
        rows.push([]);
        while(rows[rows.length - 1].length < size) {
            rows[rows.length - 1].push(
                ''
            )
        }
    }

    return rows;
}

export const Sketch = () => {
    const [index, setIndex] = useState(0);
    const [grid, setGrid] = useState(getGrid())

    useEffect( () => {
        let interval = setInterval(() => {
            setIndex(prev => (prev += 1)%360)
        }, 40)

        return () => {
            clearInterval(interval);
        }
    }, [])

    return (
        <div>
            <div style={{marginBottom: 20}}>
                <input type="range" 
                    value={grid[0].length} 
                    min="1" 
                    max="30" 
                    className="w-100"
                    onChange={(e) => setGrid(getGrid(parseInt(e.target.value, 10)))} 
                    />
            </div>
            {grid.map((row,i) => (
                <div className="row d-flex flex-row" 
                    onMouseMove={() => setIndex(prev => (prev += 1)%360)}
                    key={i}>
                    {row.map((col,j) => (
                        <div className="col" 
                            style={{
                                background: `linear-gradient(${(j * 12 + i * 12) + index}deg, #fff, #00f)`,
                                width: `${100/grid[0].length}%`,
                                paddingTop: `${100/grid[0].length}%`,
                                position: 'relative',
                            }}
                            key={j}>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Sketch;