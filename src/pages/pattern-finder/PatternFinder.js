import React, { useState } from 'react';

export const PatternFinder = () => {
    const [colorChecked, setColorChecked] = useState([true,true,true,true,true]);
    const [positionChecked, setPositionChecked] = useState([true, true, true, true]);
    
    const colors = [
        '#808071', // taupe
        '#4d3326', // brown
        '#7e272b', // dark red
        '#9b5836', // orange
        '#e1e2d3', // cream
    ]
    const data = [
        [0,1,2,3],
        [1,2,0,4],
        [0,3,2,3],
        [1,4,2,3],

        [2,0,4,2],
        [0,4,2,1],
        [1,4,3,2],
        [3,1,0,4],

        [0,3,1,4],
        [3,4,0,3],
        [2,3,4,0],
        [0,2,0,4],

        [0,2,4,2],
        [1,4,2,3],
        [3,2,0,2],
        [0,3,1,4],

        [1,4,3,2],
        [3,1,0,4],
        [0,4,2,1],
        [3,0,4,3],

        [2,3,0,1],
        [0,2,0,3],
        [1,3,0,4],
        [0,1,2,3],
    ]

    const getStyle = (square, j) => {
        let style = {};
        const checked = colorChecked[square] && positionChecked[j];

        style.width = (5 - j) * 20 - (j * 4) + 'px';
        style.height = (5 - j) * 20 - (j * 4) + 'px';
        style.top = j * 10 + (j * 2) + 'px';
        style.left = j * 10 + (j * 2) + 'px';
        style.background = checked ? colors[square] : '#fff';
        style.border = checked ? '' : '1px solid #e6e6e6';

        return style;
    }

    const handleColorChecked = (i) => {
        colorChecked[i] = !colorChecked[i];

        setColorChecked([...colorChecked]);
    }

    const handlePositionChecked = (i) => {
        positionChecked[i] = !positionChecked[i];

        setPositionChecked([...positionChecked]);
    }

    // (() => {
    //     let totals = [0,0,0,0,0];
    //     data.forEach((block, i) => {
    //         if (i % 4 === 0) {
    //             // console.log(totals)
    //             // totals = [0,0,0,0,0];
    //         } 
    //         block.forEach((colorIndex, j) => {
    //             totals[colorIndex] += 4 - j;
    //         })
    //     })
    //     console.log(totals)
    // })()

    return (
        <div className='pattern-finder'>
            <p>
                <a target='__blank' rel="noreferrer" href='https://www.reddit.com/r/patterns/comments/jz1eed/i_cant_find_the_pattern_in_my_rug_and_it_is/'>
                    q: is there a pattern?
                </a>
            </p>
            <p>
                <a target='__blank' rel="noreferrer" href='https://forum.alpaca.lurk.org/t/non-patterns/219/2'>
                    a: kind of
                </a>
            </p>
            <div className='pattern-finder-checkboxes'>
                <div className='pattern-finder-checkboxes-column'>
                    {['taupe', 'brown', 'dark red', 'orange', 'cream'].map((color, i) => {
                        return (
                            <label key={color}>
                                <input type='checkbox' 
                                    checked={colorChecked[i] === true} 
                                    onKeyDown={(e) => e.which === 13 || e.which === 32 ? handleColorChecked(i) : null }
                                    onChange={() => handleColorChecked(i)}
                                    />
                                <span>
                                    {color}
                                </span>
                            </label>
                        )
                    })}
                </div>
                <div className='pattern-finder-checkboxes-column'>
                    {['outer', 'second from outer', 'second from inner', 'inner'].map((position, i) => {
                        return (
                            <label key={position}>
                                <input type='checkbox' 
                                    checked={positionChecked[i] === true} 
                                    onKeyDown={(e) => e.which === 13 || e.which === 32 ? handlePositionChecked(i) : null }
                                    onChange={() => handlePositionChecked(i)}
                                    />
                                <span>
                                    {position}
                                </span>
                            </label>
                        )
                    })}
                </div>
            </div>
            <div className='pattern-finder-squares'>
                {data.map((block, i) => (
                    <div key={i} className='pattern-finder-square'>
                        {block.map((square,j) => (
                            <div key={`${square}_${j}`} style={getStyle(square, j)}>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PatternFinder;