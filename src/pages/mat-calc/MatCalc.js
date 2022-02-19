import React, { useState, useEffect } from 'react';
import FrameSizeSelect from './FrameSizeSelect';
import DecimalToFraction from './DecimalToFraction';
import MatSvg from './MatSvg';

import './_mat-calc.scss';

export const MatCalc = () => {
    const [frameSizes, setFrameSizes] = useState([
        [8, 10],
        [11, 14],
        [12, 12],
        [16, 20],
        [20, 24],
    ])
    const [customFrameSize, setCustomFrameSize] = useState(false)
    const [image, setImage] = useState([6, 9]);
    const [matSize, setMatSize] = useState([frameSizes[1][0], frameSizes[1][1]])
    const [imageBorder, setImageBorder] = useState([0.125, 0.125])
    const [bottomWeight, setBottomWeight] = useState(0)

    const rotate = () => {
        setFrameSizes(prev => (
            prev.map(size => size.reverse())
        ))
        setMatSize(prev => prev.map(x => x).reverse())
        setImage(prev => prev.map(x => x).reverse())
        setImageBorder(prev => prev.map(x => x).reverse())
    }
 
    useEffect(() => {
        setImage(prev => {
            return [
                Math.min(matSize[0], prev[0]),
                Math.min(matSize[1], prev[1]),
            ]
        })
    }, [matSize])

    return (
        <div className="mat-calc">
            <h2>
                mat calculator
            </h2>
            <a className="home-link" href="/">
                ☺
            </a>
            <div className="d-flex flex-row">
                <div style={{flex: '1 1 auto'}}>
                    <div>
                        <label className="d-flex flex-row align-items-center">
                            <p>
                                mat/frame size
                            </p>
                            <FrameSizeSelect size={matSize}
                                frameSizes={frameSizes}
                                updateSize={setMatSize} 
                                customFrameSize={customFrameSize}
                                setCustomFrameSize={setCustomFrameSize}
                                />
                        </label>
                    </div>
                    {customFrameSize && 
                        <React.Fragment>
                            <div>
                                <label className="d-flex flex-row align-items-center">
                                    <p>
                                        mat/frame width
                                    </p>
                                    <input type="range"
                                        step={0.5}
                                        min={1}
                                        max={50} 
                                        value={matSize[0]}
                                        onChange={(e) => {
                                            const val = parseFloat(e.target.value);
                                            setMatSize(prev => [val, prev[1]])
                                        }}
                                        />
                                    <p>
                                        <DecimalToFraction decimal={matSize[0]}
                                            svg={false}
                                            />
                                    </p>
                                </label>
                            </div>
                            <div>
                                <label className="d-flex flex-row align-items-center">
                                    <p>
                                        mat/frame height
                                    </p>
                                    <input type="range"
                                        step={0.5}
                                        min={1}
                                        max={50} 
                                        value={matSize[1]}
                                        onChange={(e) => {
                                            const val = parseFloat(e.target.value);
                                            setMatSize(prev => [prev[0], val])
                                        }}
                                        />
                                    <p>
                                        <DecimalToFraction decimal={matSize[1]}
                                            svg={false}
                                            />
                                    </p>
                                </label>
                            </div>
                        </React.Fragment>
                    }
                    <div>
                        <label className="d-flex flex-row align-items-center">
                            <p>
                                image width
                            </p>
                            <input type="range"
                                step={0.125}
                                min={1}
                                max={matSize[0]} 
                                value={image[0]}
                                onChange={(e) => {
                                    const val = parseFloat(e.target.value);
                                    setImage(prev => [val, prev[1]])
                                }}
                                />
                            <p>
                                <DecimalToFraction decimal={image[0]}
                                    svg={false}
                                    />
                            </p>
                        </label>
                    </div>
                    <div>
                        <label className="d-flex flex-row align-items-center">
                            <p>
                                image height
                            </p>
                            <input type="range"
                                step={0.125}
                                min={1}
                                max={matSize[1]} 
                                value={image[1]}
                                onChange={(e) => {
                                    const val = parseFloat(e.target.value);
                                    setImage(prev => [prev[0], val])
                                }}
                                />  
                            <p>
                                <DecimalToFraction decimal={image[1]}
                                    svg={false}
                                    />
                            </p>
                        </label>
                    </div> 
                    <div>
                        <label className="d-flex flex-row align-items-center">
                            <p>
                                border overlap
                            </p>
                            <input type="range"
                                step={0.125}
                                min={-1}
                                max={1} 
                                value={imageBorder[0]}
                                onChange={(e) => {
                                    const val = parseFloat(e.target.value);
                                    setImageBorder([val, val])
                                }}
                                />  
                            <p>
                                <DecimalToFraction decimal={imageBorder[0]}
                                    svg={false}
                                    />
                            </p>
                        </label>
                    </div> 
                    <div>
                        <label className="d-flex flex-row align-items-center">
                            <p>
                                bottom weight
                            </p>
                            <input type="range"
                                step={0.125}
                                min={0}
                                max={1} 
                                value={bottomWeight}
                                onChange={(e) => {
                                    const val = parseFloat(e.target.value);
                                    setBottomWeight(val)
                                }}
                                />  
                            <p>
                                <DecimalToFraction decimal={bottomWeight}
                                    svg={false}
                                    />
                            </p>
                        </label>
                    </div> 
                </div>
                <div style={{flex: '0 1 auto'}}>
                    <button type='button'
                        className='d-flex flex-row rotate-button'
                        style={{padding: '12px', border: '1px solid #000', borderRadius: '100%'}}
                        onClick={() => rotate()}>
                            <div className='icon'>
                                &#8635;
                            </div>
                            <div style={{marginLeft: '0.25rem'}}>
                                rotate 
                            </div>
                    </button>
                </div>
            </div>
            <div style={{marginTop: '1rem'}}>
                <div style={{margin: '0 auto'}}>
                    <MatSvg matSize={matSize}
                        image={image}
                        imageBorder={imageBorder}
                        bottomWeight={bottomWeight}
                        maxFrameSize={frameSizes[frameSizes.length - 1]}
                        />
                </div>
            </div>
        </div>
    )
}

export default MatCalc;