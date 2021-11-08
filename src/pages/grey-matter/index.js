import React, { useState } from "react";
import Sketch from "react-p5";

import "./_grey-matter.scss";
import { inTangent, threshold } from "./sketches";

const SPACER = 20;

export const GreyMatter = () => {
    const [size, setSize] = useState(Math.min(window.innerHeight/2, window.innerWidth/3))
    const [inverse, setInverse] = useState(false)
    const [index, setIndex] = useState(0)

	const setup = (p5, canvasParentRef) => {
        p5.createCanvas(window.innerWidth - SPACER, window.innerHeight).parent(canvasParentRef);
    };

    const windowResized = (p5, canvasParentRef) => {
        p5.resizeCanvas(window.innerWidth - SPACER, window.innerHeight)
        setSize(Math.min(window.innerHeight/2, window.innerWidth/3))
    }

    const draw = (p5) => {
        if (index === 0) {
            inTangent(p5, size, inverse)
        } else {
            threshold(p5, size/2, inverse)
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
                        In Tangent
                    </button>
                    <button
                        type="button" 
                        tabIndex="0"
                        onClick={() => setIndex(1)}
                        className={`sketch-nav ${index === 1 ? 'selected' : ''}`}>
                        Threshold
                    </button>
                </div>
                <div className="d-flex flex-row align-items-center">
                    <button type="button" 
                        onClick={() => setInverse(x => !x)}
                        className={`border ${inverse ? 'secondary-background' : 'primary-background'}`}
                        style={{width: 15, height: 15, marginRight: 15}}>
                    </button>
                </div>
            </div>

            <div className="pos-absolute grey-matter-header border-left"
                style={{  height: '100%', paddingBottom: 50, paddingTop: 50, left: '0', transform: 'rotate(180deg)', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>                
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