import React, { useState } from "react";
import Sketch from "react-p5";

import { inTangent, threshold } from "./p5/sketches";

export const GreyMatterSketch = ({inverse = false, outline = false, index = 0, parentBound}) => {
    const [size, setSize] = useState(Math.min(window.innerHeight/2, (window.innerWidth - 30)/2))
    const [dim, setDim] = useState({w: 700, h: 700})
    const [parent, setParent] = useState(null)
    const SPACER = parentBound ? 0 : 20;

	const setup = (p5, canvasParentRef) => {
        const d = {
            w: parentBound ? canvasParentRef.clientWidth : window.innerWidth,
            h: parentBound ? canvasParentRef.clientWidth : window.innerHeight,
        };
        setDim(() => d)
        setSize(Math.min(d.h/2, (d.w - 30)/2))
        p5.createCanvas(d.w - SPACER, d.h).parent(canvasParentRef);

        setParent(canvasParentRef);
    };

    const windowResized = (p5) => {
        const d = {
            w: parentBound ? parent.clientWidth : window.innerWidth,
            h: parentBound ? parent.clientWidth : window.innerHeight,
        };
        setDim(() => d)
        setSize(Math.min(d.h/2, (d.w - 30)/2))

        p5.resizeCanvas(d.w - SPACER, d.h)
    }

    const draw = (p5) => {
        if (index === 0) {
            threshold(p5, size/2, inverse, outline, dim.w, dim.h)
        } else {
            inTangent(p5, size, inverse, outline, dim.w, dim.h)
        }
    }

	return (
        <div className="sketch-container" style={{marginLeft: SPACER}}>
            <Sketch setup={setup} 
                draw={draw} 
                windowResized={windowResized} 
                />
        </div>
    )
};

export default GreyMatterSketch;