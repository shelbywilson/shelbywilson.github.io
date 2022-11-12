import React, { FunctionComponent, useState, CSSProperties, useEffect, Fragment } from 'react';

import './_shadow-weaving.scss';

type Square = {
    c: number,
    v: number,
}

export const ShadowWeaving: FunctionComponent = () => {
    const [selectedThread, setSelectedThread] = useState([1 + Math.ceil(Math.random() * 8), 1 + Math.ceil(Math.random() * 8)])
    const [selectedThreadOffset, setSelectedThreadOffset] = useState([Math.floor(Math.random() * selectedThread[0]), Math.floor(Math.random() * selectedThread[1])])
    const [warp, setWarp] = useState(new Array(20).fill(0).map((n, i) => i%selectedThread[0] <= selectedThreadOffset[0] ? 0 : 1))
    const [weft, setWeft] = useState(new Array(25).fill(0).map((n, i) => i%selectedThread[1] <= selectedThreadOffset[1] ? 0 : 1))
    const [gapSize, setGapSize] = useState(24);
    const [showGrid, setShowGrid] = useState(true);
    const [contrast, setContrast] = useState('medium');
    const [invertedThread, setInvertedThread] = useState([false, false])
    const [plainWeaveCount, setPlainWeaveCount] = useState(1)

    const size = 30;
    const gap = 30 - gapSize;
    const hasGap = gap > 1;

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

    // const checkImpossible = () => {
    //     setFabric(prev => {
    //         const fabric = [...prev];
    //         fabric.forEach((row: Array<Square>, j: number) => {
    //             row.forEach((square: Square, i: number) => {
    //                 if (weft[j] !== warp[i]) {
    //                     if (square.c === warp[i]) {
    //                         square.v = 1;
    //                     } else if (square.c === weft[j]) {
    //                         square.v = 0;
    //                     }
    //                 } else if (square.c !== warp[i]) {
    //                     // warp and weft are the same
    //                     square.c = warp[i]
    //                     square.v = (i + j)%2 === 1 ? 1 : 0;
    //                 }
    //             })
    //         })

    //         return fabric
    //     })
    // }

    const randomize = () => {
        const p = warp.map(() => Math.random() > 0.5 ? 1 : 0)
        const f = weft.map(() => Math.random() > 0.5 ? 1 : 0)
        
        setWarp(p)
        setWeft(f)
        setFabric(getPlainWeave(p, f))
        setSelectedThread([-1, -1])
        setSelectedThreadOffset([0, 0])
    }

    const randomizeWeave = () => {
        setFabric(getRandomizedWeave(warp, weft))
    }

    const everyNth = (type: string, n: number, offset: number, invert: boolean) => {
        const on = invert ? 0 : 1;
        const off = invert ? 1 : 0;
        let p = warp;
        let f = weft;
        if (type === 'warp') {
            p = warp.map((x,i) => i%n <= offset ? off : on)
            setWarp(p)
            setSelectedThread(prev => [n, prev[1]])
            setSelectedThreadOffset(prev => [offset, prev[1]])
        } else {
            f = weft.map((y,j) => j%n <= offset ? off : on)
            setWeft(f)
            setSelectedThread(prev => [prev[0], n])
            setSelectedThreadOffset(prev => [prev[0], offset])
        }
        
        setFabric(getPlainWeave(p, f))
    }

    const getPlainWeave = (warp: Array<number>, weft: Array<number>): Array<Array<Square>> => {
        const arr = [];
        let i = 0;

        while (arr.length < weft.length) {
            const row: Array<Square> = [];
            arr.push(row)
            i = arr.length - 1;
            while (arr[i].length < warp.length) {
                const j = arr[i].length;
                const v = (i%2 + j%2)%2 === plainWeaveCount ? 0 : 1
                let c = 0;

                if (v === 1 && c !== warp[j]) {
                    c = warp[j]
                } else if (v === 0 && c !== weft[i]) {
                    c = weft[i]
                }

                arr[i].push({c, v});
            }
        }

        return arr
    }

    const getRandomizedWeave = (warp: Array<number> , weft: Array<number>):Array<Array<Square>> => {
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

                // const prevV = arr[i - 1] ?
                //     arr[i - 1][j].v 
                // : i%2

                const c = f === p ? 
                    f 
                : Math.random() > 0.5 ? 0 : 1;
                const v = f === p ? 
                    Math.random() > 0.5 ? 0 : 1
                : c === f ? 0 : 1

                arr[i].push({c, v});
            }
        }

        return arr;
    }

    const updateInvert = (type: string) => {
        if (type === 'warp') {
            setInvertedThread(prev => {
                everyNth('warp', selectedThread[0], selectedThreadOffset[0], !prev[0])
                return [!prev[0], prev[1]]
            })
        } else {
            setInvertedThread(prev => {
                everyNth('weft', selectedThread[1], selectedThreadOffset[1], !prev[1])
                return [prev[0], !prev[1]]
            })
        }
    }

    const [fabric, setFabric] = useState(getPlainWeave(warp, weft));

    // useEffect(() => {
    //     checkImpossible()
    // }, [warp, weft])

    useEffect(() => {
        setFabric(getPlainWeave(warp, weft))
    }, [plainWeaveCount])

    // const getV = () => {
    //     let num = 0;
    //     fabric.forEach(row => {
    //         row.forEach(square => {
    //             num += square.v
    //         })
    //     })

    //     return num
    // }

    // const numV = getV();

    return (
        <div className={`shadow-weaving contrast-${contrast} ${hasGap ? 'show-warp-weft' : ''} ${showGrid ? 'show-grid' : ''}`}>
            <div className='shadow-weaving-options'>
                <div>
                    <h1>
                        Shadow weaving
                    </h1>
                    <div className='flex-row m-r m-b'>
                        <div className='m-r'>
                            contrast
                        </div>
                        {['high', 'medium', 'low'].map(option => (
                            <label className='m-r' key={option}>
                                <input type='radio'checked={contrast === option} onChange={() => setContrast(option)} />
                                    {option}
                            </label>
                        ))}
                    </div>
                    <div className='flex-row m-r m-b'>
                        <div className='m-r'>
                            spacing
                        </div>
                        <label>
                            <input type='range' 
                                value={gapSize} 
                                min={2} 
                                max={size} 
                                onChange={(e) => setGapSize(parseInt(e.target.value, 10))} />
                        </label>
                        <label className='m-l'>
                            <input type='checkbox' checked={showGrid} onChange={() => setShowGrid(prev => !prev)} />
                            show grid
                        </label>
                    </div>
                    <div className='m-t m-b'>
                        <button onClick={randomize}>random warp/weft</button>
                        <div className='flex-row m-t'>
                            <div style={{width: 50}}>warp</div>
                            <div>
                                <input type='range' min={1} max={10} value={selectedThread[0]} onChange={e => everyNth('warp', parseInt(e.target.value, 10), selectedThreadOffset[0], invertedThread[0])} />
                                <input type='range' min={0} max={10} value={selectedThreadOffset[0]} onChange={e => everyNth('warp', selectedThread[0], parseInt(e.target.value, 10), invertedThread[0])} />
                            </div>
                            <label className='m-l'>
                                <input type='checkbox' checked={invertedThread[0]} onChange={() => updateInvert('warp')} />
                                invert 
                            </label>
                        </div>
                        <div className='flex-row m-t'>
                            <div style={{width: 50}}>weft</div>
                            <div>
                                <input type='range' min={1} max={10} value={selectedThread[1]} onChange={e => everyNth('weft', parseInt(e.target.value, 10), selectedThreadOffset[1], invertedThread[1])} />
                                <input type='range' min={0} max={10} value={selectedThreadOffset[1]} onChange={e => everyNth('weft', selectedThread[1], parseInt(e.target.value, 10), invertedThread[1])} />
                            </div>
                            <label className='m-l'>
                                <input type='checkbox' checked={invertedThread[1]} onChange={() => updateInvert('weft')} />
                                invert 
                            </label>
                        </div>
                    </div>
                    <div>
                        <button className='m-r' onClick={() => setPlainWeaveCount(prev => (prev + 1)%2)}>plain weave</button>
                        <button onClick={randomizeWeave}>random weave</button>
                    </div>
                    <div>
                        <button className='m-t m-r' onClick={() => setWeft(prev => {
                            const updated = [...prev];
                            const c = updated[0] === 1 ? 0 : 1;
                            updated.unshift(c)

                            setFabric(prev => {
                                const fabric = [...prev]
                                const row = []
                                while (row.length < warp.length) {
                                    const v: number = (row.length + fabric[0][0].v + 1)%2

                                    row.push({c: v ? warp[row.length] : c, v: v})
                                    // row.push({c: c, v: c === warp[row.length] ? row.length%2 : 0})
                                }
                                fabric.unshift(row)
                                return fabric
                            })

                            return updated;
                        })}>+ weft</button>
                        <button onClick={() => setWarp(prev => {
                            const updated = [...prev];
                            const c = updated[0] === 1 ? 0 : 1;
                            updated.unshift(c)

                            setFabric(prev => {
                                const fabric = [...prev]
                                fabric.forEach((row,i) => {
                                    const v = (i + updated.length + 1)%2;
                                    // row.unshift({c: c, v: c === weft[i] ? 0 : 1})
                                    row.unshift({c: v ? updated[0] : weft[i], v: v})
                                })
                                return fabric
                            })

                            return updated;
                        })}>+ warp</button>
                    </div>
                </div>
            </div>
            <div className='shadow-weaving-fabric'>
                <div>
                    {weft.map((f, j) => (
                        <div key={j} 
                            style={{
                                top: (j + 1)/(weft.length + 1) * 100 + '%', 
                                height: 1/(weft.length + 1) * 100 + '%',
                                position: 'absolute'
                            }}>
                            <input type='checkbox' 
                                checked={f === 0}
                                onChange={() => setWeft(prev => {
                                    const updated = [...prev]
                                    updated[j] = f === 1 ? 0 : 1

                                    setFabric(prev => {
                                        const fabric = [...prev]
                                        fabric[j].forEach((square, i) => {
                                            square.v = (i + j + fabric[0][0].v)%2
                                            if (square.v) {
                                                square.c = warp[i]
                                            } else {
                                                square.c = updated[j]
                                            }
                                            // square.c = updated[j]
                                            // if (square.c === warp[i]) {
                                            //     // warp and weft are the same
                                            //     square.v = (j + i)%2
                                            // } else {
                                            //     square.v = square.c === weft[i] ? 0 : 1;
                                            // }
                                        })
                                        return fabric
                                    })

                                    return updated
                                })} />
                            </div>
                        ))}
                </div>
                <div>
                    {warp.map((p, i) => (
                        <div key={i}
                            style={{
                                left: (i + 1)/(warp.length + 1) * 100 + '%', 
                                width: 1/(warp.length + 1) * 100 + '%',
                                position: 'absolute',
                            }}> 
                            <input type='checkbox' 
                                checked={p === 0}
                                onChange={() => setWarp(prev => {
                                    const updated = [...prev]
                                    updated[i] = p === 1 ? 0 : 1

                                    setFabric(prev => {
                                        const fabric = [...prev]
                                        fabric.forEach((row: Array<Square>, x) => {
                                            row[i].v = (i + x + fabric[0][0].v)%2
                                            if (row[i].v) {
                                                row[i].c = updated[i]
                                            } else {
                                                row[i].c = weft[x]
                                            }
                                            // row[i].c = updated[i] 
                                            // if (updated[i] === weft[x]) {
                                            //     // warp and weft are the same
                                            //     row[i].v = (i + x)%2
                                            // } else {
                                            //     // warp and weft are different
                                            //     if (row[i].c === weft[x]) {
                                            //         row[i].v = 0;
                                            //     }
                                            // }

                                        })
                                        return fabric
                                    })

                                    return updated
                                })} />
                            </div>
                    ))}
                </div>
                <svg viewBox={`0 0 ${(warp.length + 1) * size} ${(weft.length + 1) * size}`}>
                    <g style={{transform: `translate(${size}px,${size}px)`}}>
                        {hasGap ?
                            <Fragment>
                                {warp.map((f, i) => (
                                    <rect key={`${i}-warp`} 
                                        width={size - gap}
                                        height={size * weft.length}
                                        x={i * size}
                                        className={`color-${f} grid-border warp`}>
                                    </rect>
                                ))}
                            </Fragment>
                            :
                            null 
                        }
                        {fabric.map((row: Array<Square>, j) => (
                            <g key={j}>
                                {hasGap 
                                    ? 
                                    <rect key={`${j}-weft`} 
                                        width={size * warp.length}
                                        height={size - gap}
                                        y={j * size}
                                        className={`color-${weft[j]} grid-border weft`}>
                                    </rect>
                                    :
                                    null 
                                }
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