import React, { useRef, useEffect, useState } from 'react';
// @ts-ignore
import Perlin from 'perlin.js';

import "./_noise.scss";

interface Color {
    r: number,
    g: number,
    b: number,
}

export default () => {
    const container = useRef(null);
    const [init, setInit] = useState(false);

    const height = 400;
    const width = Math.min(window.innerWidth - 40, 400);
    const frames = 400;

    const setPixel = (imageData: any, x: number, y: number, r: number, g: number, b: number, a = 255) =>{
        const index = (x + y * imageData.width) * 4;
        imageData.data[index+0] = r;
        imageData.data[index+1] = g;
        imageData.data[index+2] = b;
        imageData.data[index+3] = a;
    }

    const getPixelR = (offset: number, x: number, y: number) => {
       return Math.abs(Perlin.simplex2(x / 500 + offset, y / 500 + offset)) * 156 + 100;
    }

    const setCanvas = (prevOffset: number, offset: number, animateFrames: number) => {
        const canvas = container.current;
        // @ts-ignore
        let ctx = canvas.getContext('2d');
        
        let imageData: Uint8ClampedArray = ctx.createImageData(width, height);
        let r, g, b;

        if (animateFrames % 2 === 0) {
            for (let x = 0; x < width; x += 1) {
                for (let y = 0; y < height; y += 1) {
                    r = getPixelR(offset, x, y);
                    g = 140;
                    b = 140;

                    if (animateFrames < frames) {
                        r = getPixelR(prevOffset, x, y) + (((getPixelR(offset, x, y) - getPixelR(prevOffset, x, y)) * (animateFrames + 1)/frames));
                    }

                    setPixel(imageData, x, y, r, g, b)
                }
            }

            ctx.putImageData(imageData, 0, 0);
        }

        if (animateFrames < frames) {
            window.requestAnimationFrame(() => setCanvas(prevOffset, offset, animateFrames + 1))
        } else {
            window.requestAnimationFrame(() => setCanvas(offset, Math.random() * 1000, 0))
        }
    }

    useEffect(() => {
        if (container.current && !init) {
            setCanvas(0, Math.random() * 1000, 0);
            setInit(true)
        }
    }, [container.current])

    return (
        <div className='noise-canvas'>
            <canvas width={width} height={height} ref={container} style={{display: 'block', margin: '0 auto'}}>

            </canvas>
        </div>
    )
}