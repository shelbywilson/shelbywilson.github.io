import React, { FunctionComponent, useState, CSSProperties, useEffect } from 'react';

import './_shadow-weaving.scss';

type Square = {
    c: number,
    v: number,
}

export const ShadowWeaving: FunctionComponent = () => {
    const [warp, setWarp] = useState([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0])
    const [weft, setWeft] = useState([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0])
    const [gapSize, setGapSize] = useState(15);
    const [showGrid, setShowGrid] = useState(true);
    const [blackAndWhite, setBlackAndWhite] = useState(false);

    const size = 30;
    const gap = 30 - gapSize;
    const hasGap = gap > 1;

    const getFabric = (warp: Array<number> , weft: Array<number>):Array<Array<Square>> => {
        const arr = [];
        let i = 0;

        while (arr.length < weft.length) {
            const row: Array<Square> = [];
            arr.push(row)
            i = arr.length - 1;
            while (arr[i].length < warp.length) {
                const j = arr[i].length;
                const f = weft[i];
                const p = warp[j];

                const c = f === p ? 
                    f 
                : Math.random() > 0.5 ? 0 : 1;
                const v = f === p ? 
                    Math.random() > 0.5 ? 0 : 1
                    :
                    c === f ? 0 : 1;

                arr[i].push({c, v});
            }
        }

        return arr;
    }

    const toggle = (i: number, j: number) => {
        if (warp[i] !== weft[j]) {
            setFabric(prev => {
                const updated = [...prev];
                updated[j][i].c = prev[j][i].c === 1 ? 0 : 1;
                updated[j][i].v = updated[j][i].c === weft[j] ? 0 : 1;
                return updated
            })
        } else {
            setFabric(prev => {
                const updated = [...prev];
                updated[j][i].v = prev[j][i].v === 1 ? 0 : 1;
                return updated
            })
        }
    }

    const checkImpossible = () => {
        setFabric(prev => {
            const fabric = [...prev];
            fabric.forEach((row: Array<Square>, j: number) => {
                row.forEach((square: Square, i: number) => {
                    if (weft[j] !== warp[i]) {
                        if (square.c === warp[i]) {
                            square.v = 1;
                        } else if (square.c === weft[j]) {
                            square.v = 0;
                        }
                    } else if (square.c !== warp[i]) {
                        // warp and weft are the same
                        square.c = warp[i]
                        square.v = Math.random() > 0.5 ? 1 : 0;
                    }
                })
            })

            return fabric
        })
    }

    const randomize = () => {
        const p = warp.map(() => Math.random() > 0.5 ? 1 : 0)
        const f = weft.map(() => Math.random() > 0.5 ? 1 : 0)
        
        setWarp(p)
        setWeft(f)
        setFabric(getFabric(p, f))
    }

    const everyNth = (n: number) => {
        const p = warp.map((x,i) => i%n === 0 ? 0 : 1)
        const f = weft.map((y,j) => j%n === 0 ? 0 : 1)
        
        setWarp(p)
        setWeft(f)
        setFabric(getFabric(p, f))
    }

    useEffect(() => {
        checkImpossible()
    }, [warp, weft])

    const [fabric, setFabric] = useState(getFabric(warp, weft));

    return (
        <div className={`shadow-weaving ${blackAndWhite ? 'black-and-white' : ''} ${hasGap ? 'show-warp-weft' : ''} ${showGrid ? 'show-grid' : ''}`}>
            <div style={{margin: '0 0 2rem 0'}}>
                <div>
                    <label>
                        <input type='checkbox' checked={blackAndWhite} onChange={() => setBlackAndWhite(prev => !prev)} />
                        black and white
                    </label>
                    <label>
                        <input type='checkbox' checked={showGrid} onChange={() => setShowGrid(prev => !prev)} />
                        show grid
                    </label>
                    <label>
                        <input type='range' 
                            value={gapSize} 
                            min={2} 
                            max={size} 
                            onChange={(e) => setGapSize(parseInt(e.target.value, 10))} />
                    </label>
                </div>
                <div>
                    <button onClick={randomize}>random</button>
                    <button onClick={() => everyNth(2)}>alternate</button>
                    <button onClick={() => everyNth(3)}>every third</button>
                </div>
                <div>
                    <button onClick={() => setWarp(prev => {
                        const updated = [...prev];
                        const c = updated.length % 2;
                        updated.unshift(c)

                        setFabric(prev => {
                            const fabric = [...prev]
                            fabric.forEach((row,i) => (
                                row.unshift({c: c, v: c === weft[i] ? 0 : 1})
                            ))
                            return fabric
                        })

                        return updated;
                    })}>+ warp</button>
                    <button style={{margin: '1rem 1rem 0 0'}} onClick={() => setWeft(prev => {
                        const updated = [...prev];
                        const c = updated.length % 2;
                        updated.unshift(c)

                        setFabric(prev => {
                            const fabric = [...prev]
                            const row = []
                            while (row.length < warp.length) {
                                row.push({c: c, v: c === warp[row.length] ? 1 : 0})
                            }
                            fabric.unshift(row)
                            return fabric
                        })

                        return updated;
                    })}>+ weft</button>
                </div>
            </div>
            <div style={{position: 'relative'}}>
                {/* <input type='slider' checked={hasGap} onChange={() => setHasGap(prev => !prev)} /> */}
                <div>
                    {weft.map((f, j) => (
                        <input type='checkbox' 
                            style={{margin: 0, top: (j + 1)/(weft.length + 1) * 100 + '%', position: 'absolute'}} 
                            key={j}
                            checked={f === 0}
                            onChange={() => setWeft(prev => {
                                const updated = [...prev]
                                updated[j] = f === 1 ? 0 : 1

                                setFabric(prev => {
                                    const fabric = [...prev]
                                    let vCount = 1;
                                    fabric[j].forEach((square, i) => {
                                        if (square.v) {
                                            vCount += 1;
                                        }
                                        square.c = updated[j]
                                        if (square.c === warp[i]) {
                                            // warp and weft are the same
                                            square.v = vCount % 2;
                                            vCount += 1;
                                        } else {
                                            square.v = 0;
                                        }
                                    })
                                    return fabric
                                })

                                return updated
                            })} />
                    ))}
                </div>
                <div>
                    {warp.map((p, i) => (
                        <input type='checkbox' 
                            style={{margin: 0, left: (i + 1)/(warp.length + 1) * 100 + '%', position: 'absolute'}} 
                            key={i}
                            checked={p === 0}
                            onChange={() => setWarp(prev => {
                                const updated = [...prev]
                                updated[i] = p === 1 ? 0 : 1

                                setFabric(prev => {
                                    const fabric = [...prev]
                                    fabric.forEach((row: Array<Square>, x) => {
                                        row[i].c = updated[i] 
                                        let vCount = 0;
                                        if (updated[i] === weft[x]) {
                                            // warp and weft are the same
                                            row[i].v = vCount % 2;
                                            vCount += 1;
                                        } else {
                                            // warp and weft are different
                                            if (row[i].c === weft[x]) {
                                                row[i].v = 0;
                                            }
                                        }

                                    })
                                    return fabric
                                })

                                return updated
                            })} />
                    ))}
                </div>
                <svg viewBox={`0 0 ${(warp.length + 1) * size} ${(weft.length + 1) * size}`}>
                    <g style={{transform: `translate(${size}px,${size}px)`}}>
                        {warp.map((f, i) => (
                            <rect key={`${i}-warp`} 
                                width={size - gap}
                                height={size * weft.length}
                                x={i * size}
                                className={`color-${f} grid-border warp`}>
                            </rect>
                        ))}
                        {fabric.map((row: Array<Square>, j) => (
                            <g key={j}>
                                <rect key={`${j}-weft`} 
                                    width={size * warp.length}
                                    height={size - gap}
                                    y={j * size}
                                    className={`color-${weft[j]} grid-border weft`}>
                                </rect>
                                {row.map((col: Square, i) => {
                                    const {c, v} = col;
                                    const style: CSSProperties = {}
                                    let width = size;
                                    let height = size;
                                    let x = i * size;
                                    let y = j * size;
                                    let classes = `color-${c} ${weft[j] !== warp[i] ? 'changeable' : 'toggle-direction'}`

                                    if (hasGap) {
                                        width = size - gap + 2;
                                        height = size - gap - 2;
                                        x = i * size - 1;
                                        y = j * size + 1;

                                        if (v) {
                                            width -= 2
                                            x += 1;
                                            height += 4;
                                            y -= 2;

                                            style.strokeDasharray = `${height} ${width}`;
                                            style.strokeDashoffset = height;
                                            classes += ' grid-border';
                                        }
                                    } else {
                                        width += 2;
                                        x -= 1;
                                        height += 2;
                                        y -= 1;
                                    }

                                    return (
                                        <rect key={`${i}-${j}`} 
                                            height={height}
                                            width={width}
                                            className={classes}
                                            x={x}
                                            y={y}
                                            onClick={() => toggle(i, j)}
                                            style={style}>
                                        </rect>
                                    )
                                })}
                            </g>
                        ))} 
                    </g>
                </svg>
            </div>
        </div>
    )
}

export default ShadowWeaving;