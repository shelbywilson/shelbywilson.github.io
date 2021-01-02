import React, { useState } from 'react';

export default () => {
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
        let style = {position: 'absolute'};
        const checked = colorChecked[square] && positionChecked[j];

        style.width = (5 - j) * 24 - (j * 4) + 'px';
        style.height = (5 - j) * 24 - (j * 4) + 'px';
        style.top = j * 12 + (j * 2) + 'px';
        style.left = j * 12 + (j * 2) + 'px';
        style.background = checked ? colors[square] : '#fff';
        style.border = checked ? '' : '1px solid #e6e6e6';
        style.boxSizing = 'border-box';

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
        <div>
            <div style={{display: 'flex', flexDirection: 'row', margin: '3rem', fontFamily: 'sans-serif', justifyContent: 'center'}}>
                <div style={{display: 'flex', flexDirection: 'column', margin: '0 3rem'}}>
                    {['taupe', 'brown', 'dark red', 'orange', 'cream'].map((color, i) => {
                        return (
                            <label key={color}>
                                <input type='checkbox' 
                                    checked={colorChecked[i] === true} 
                                    onChange={() => handleColorChecked(i)}
                                    />
                                <span>
                                    {color}
                                </span>
                            </label>
                        )
                    })}
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    {['outer', 'second from outer', 'second from inner', 'inner'].map((position, i) => {
                        return (
                            <label key={position}>
                                <input type='checkbox' 
                                    checked={positionChecked[i] === true} 
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
            <div style={{
                display: 'flex', 
                flexDirection: 'row',
                width: 560, 
                flexWrap: 'wrap', 
                justifyContent: 'space-between',
                margin: '0 auto',
                }}>
                {data.map((block, i) => (
                    <div key={i} style={{position: 'relative', height: 120, width: 120, margin: 10}}>
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

// export default () => {
//     // const [size, setSize] = useState(() => Math.random())

//     // useEffect(() => {
//     //     setInterval(() => {
//     //         setSize(() => Math.random())
//     //     }, 10000)
//     // }, [])

//     const size = 0.5;


//     return (
//         <div style={{
//                 height: '100vh',
//                 width: '100vw',
//                 position: 'relative',
//                 overflow: 'hidden',
//             }}>
//             {/* <div style=
//                 {{
//                     backgroundImage: 'repeating-linear-gradient(45deg, #ffe7a7 25%, transparent 25%, transparent 75%, #ffe7a7 75%, #ffe7a7),repeating-linear-gradient(45deg, #ffe7a7 25%, transparent 25%, transparent 75%, #ffe7a7 75%, #ffe7a7)',
//                     backgroundPosition: `0 0,${size * 120}px ${size * 120}px`,
//                     backgroundSize: `calc(2 * ${size * 120}px) calc(2 * ${size * 120}px)`,
//                     position: 'fixed',
//                     height: '100vh',
//                     width: '100vw',
//                     transition: 'all 500ms',
//                 }}>
//             </div>
//             <div style=
//                 {{
//                     backgroundImage: 'repeating-linear-gradient(45deg, #ffe7a7 25%, transparent 25%, transparent 75%, #ffe7a7 75%, #ffe7a7),repeating-linear-gradient(45deg, #ffe7a7 25%, transparent 25%, transparent 75%, #ffe7a7 75%, rgb(167, 186, 255))',
//                     backgroundPosition: '0 0,40px 40px',
//                     backgroundSize: 'calc(2 * 40px) calc(2 * 40px)',
//                     height: '500vh',
//                 }}>
//             </div>   */}
//             <div style={{
//                 height: '30vh',
//                 right: '40vh',
//                 borderTopLeftRadius: '50%',
//                 borderTopRightRadius: '50%',
//                 width: '40vh',
//                 background: 'linear-gradient(beige, pink)',
//                 position: 'absolute',
//                 bottom: '20vh',
//             }}>
//             </div>
//             <div style={{
//                 height: '30vh',
//                 right: '10vh',
//                 borderTopLeftRadius: '50%',
//                 borderTopRightRadius: '50%',
//                 width: '40vh',
//                 background: 'linear-gradient(beige, pink)',
//                 position: 'absolute',
//                 bottom: '34vh',
//             }}>
//             </div>
//             <div style={{
//                 height: '40vh',
//                 right: 0,
//                 borderTopLeftRadius: '50%',
//                 borderTopRightRadius: '50%',
//                 width: '60vh',
//                 background: 'linear-gradient(beige, pink)',
//                 position: 'absolute',
//                 bottom: '10vh',
//             }}>
//             </div>
//             <div style={{
//                 height: '50vh',
//                 borderTopLeftRadius: '50%',
//                 borderTopRightRadius: '50%',
//                 width: '80vh',
//                 background: 'linear-gradient(beige, pink)',
//                 position: 'absolute',
//                 bottom: '-5vh',
//             }}></div>
//             <div style={{
//                 height: '50vh',
//                 left: '40vw',
//                 borderTopLeftRadius: '50%',
//                 borderTopRightRadius: '50%',
//                 width: '80vh',
//                 background: 'linear-gradient(beige, pink)',
//                 position: 'absolute',
//                 bottom: '-10vh',
//             }}></div>
//             <div style={{
//                 height: '50vh',
//                 left: '20vw',
//                 borderTopLeftRadius: '50%',
//                 borderTopRightRadius: '50%',
//                 width: '80vh',
//                 background: 'linear-gradient(beige, pink)',
//                 position: 'absolute',
//                 bottom: '-25vh',
//             }}></div>
            
//         </div>
//     )
// }