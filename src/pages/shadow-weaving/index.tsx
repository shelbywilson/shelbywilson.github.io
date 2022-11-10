import React, { FunctionComponent, useState, CSSProperties, useEffect } from 'react';

const colors = [
    `rgba(0, 0, 255, 1)`,
    `rgba(255, 255, 255, 1)`,
]

type Square = {
    c: number,
    v: number,
}

export const ShadowWeaving: FunctionComponent = () => {
    const [warp, setWarp] = useState([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0])
    const [weft, setWeft] = useState([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0])
    const [hasGap, setHasGap] = useState(true);

    const size = 30;
    const gap = hasGap ? 4 : 0;

    const getFabric = ():Array<Array<Square>> => {
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

    useEffect(() => {
        setFabric(getFabric())
    }, [warp, weft])

    const [fabric, setFabric] = useState(getFabric());

    return (
        <div style={{maxWidth: 800, margin: '0 auto'}}>
            <div style={{margin: '0 0 2rem 0'}}>
                <label>
                    <input type='checkbox' checked={hasGap} onChange={() => setHasGap(prev => !prev)} />
                    show warp and weft
                </label>
                <div>
                    <button style={{margin: '1rem 1rem 0 0'}} onClick={() => setFabric(getFabric())}>random</button>
                    <button style={{margin: '1rem 1rem 0 0'}} onClick={() => setWarp(prev => {
                        const updated = [...prev];
                        updated.unshift(updated.length % 2)
                        return updated;
                    })}>+ warp</button>
                    <button style={{margin: '1rem 1rem 0 0'}} onClick={() => setWeft(prev => {
                        const updated = [...prev];
                        updated.unshift(updated.length % 2)
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
                                style={{fill: colors[f], stroke: '#000'}}>
                            </rect>
                        ))}
                        {fabric.map((row: Array<Square>, j) => (
                            <g key={j}>
                                <rect key={`${j}-weft`} 
                                    width={size * weft.length}
                                    height={size - gap}
                                    y={j * size}
                                    style={{fill: colors[weft[j]], stroke: '#000'}}>
                                </rect>
                                {row.map((col: Square, i) => {
                                    const {c, v} = col;
                                    const style: CSSProperties = {
                                        fill: colors[c],
                                    }
                                    let width = size;
                                    let height = size;
                                    let x = i * size;
                                    let y = j * size;

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
                                            style.strokeDashoffset = v ? height : 0;
                                            style.stroke = '#000';
                                            style.strokeWidth = 1;
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