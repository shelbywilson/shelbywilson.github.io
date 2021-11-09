import React, { useState } from "react";
import Sketch from "react-p5";

import "./_grey-matter.scss";
import { inTangent, threshold } from "./sketches";

const SPACER = 20;

export const GreyMatter = () => {
    const [size, setSize] = useState(Math.min(window.innerHeight/2, (window.innerWidth - 30)/2))
    const [inverse, setInverse] = useState(false)
    const [outline, setOutline] = useState(false)
    const [index, setIndex] = useState(0)

	const setup = (p5, canvasParentRef) => {
        p5.createCanvas(window.innerWidth - SPACER, window.innerHeight).parent(canvasParentRef);
    };

    const windowResized = (p5, canvasParentRef) => {
        p5.resizeCanvas(window.innerWidth - SPACER, window.innerHeight)
        setSize(Math.min(window.innerHeight/2, (window.innerWidth - 30)/2))
    }

    const draw = (p5) => {
        if (index === 0) {
            threshold(p5, size/2, inverse, outline)
        } else {
            inTangent(p5, size, inverse, outline)
        }
    }

	return (
        <div className={`grey-matter ${inverse ? 'inverse' : ''}`}>
            <div className="sketch-container" style={{marginLeft: SPACER}}>
                <Sketch setup={setup} 
                    draw={draw} 
                    windowResized={windowResized} 
                    />
            </div>

            <div className="pos-absolute d-flex w-100 flex-row justify-between border-bottom primary-background" style={{ zIndex: 1}}>
                <div className="d-flex flex-row">
                    <button
                        type="button" 
                        tabIndex="0"
                        onClick={() => setIndex(0)}
                        className={`sketch-nav ${index === 0 ? 'selected' : ''}`}>
                        Threshold
                    </button>
                    <button
                        type="button" 
                        tabIndex="0"
                        onClick={() => setIndex(1)}
                        className={`sketch-nav d-flex flex-row ${index === 1 ? 'selected' : ''}`}>
                        In Tangent
                    </button>
                </div>
                <div className="d-flex flex-row align-items-center">
                    <label className={`toggle`}>
                        Outline
                        <input type="checkbox"
                            checked={outline}
                            onChange={() => setOutline(x => !x)}
                            />
                    </label>
                    <label className={`toggle`}>
                        Invert
                        <input type="checkbox"
                            checked={inverse}
                            onChange={() => setInverse(x => !x)}
                            />
                    </label>
                </div>
            </div>

            <div className="pos-absolute border-left grey-matter-header h-100 d-flex flex-row"
                style={{ 
                    paddingBottom: 50, 
                    paddingTop: 50, 
                    left: '0', 
                    transform: 'rotate(180deg)', 
                    alignItems: 'center',
                    width: 39,
                }}>                
                <div style={{writingMode: 'vertical-rl'}}>
                    Grey Matter • John and June Alcott Gallery, UNC • Nov 5 - Dec 3, 2021
                </div>
            </div>
            <div className="pos-absolute w-100 grey-matter-header border-top"
                style={{ padding: '10px', left: '0', bottom: 0, display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>                
                <div className="d-flex flex-row">
                    <a className="arrow secondary-color" 
                        href="https://www.betsykenyon.com/" 
                        target="_blank">
                        Betsy Kenyon
                    </a>
                        &nbsp;•&nbsp;
                    <a className="arrow secondary-color" 
                        href="https://shelby.cool" 
                        target="_blank">
                            Shelby Wilson
                    </a>
                </div>
            </div>
        </div>
    )
};

export default GreyMatter;