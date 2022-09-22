import React, { useEffect, useRef } from 'react';
import img from './../../images/clouds/clouds04_small.jpg';
// @ts-ignore
import Perlin from 'perlin.js';

function RGBToHSL(rgb) {
    let r = rgb[0]
    let g = rgb[1]
    let b = rgb[2]
    // Make r, g, and b fractions of 1
    r /= 255;
    g /= 255;
    b /= 255;
  
    // Find greatest and smallest channel values
    let cmin = Math.min(r,g,b),
        cmax = Math.max(r,g,b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;
  
    // Calculate hue
    // No difference
    if (delta == 0)
      h = 0;
    // Red is max
    else if (cmax == r)
      h = ((g - b) / delta) % 6;
    // Green is max
    else if (cmax == g)
      h = (b - r) / delta + 2;
    // Blue is max
    else
      h = (r - g) / delta + 4;
  
    h = Math.round(h * 60);
      
    // Make negative hues positive behind 360°
    if (h < 0)
        h += 360;
  
    // Calculate lightness
    l = (cmax + cmin) / 2;
  
    // Calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
      
    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
  
    return {
        h,
        s,
        l,
    };
  }

export const PixelSort = () => {
    const canvasRef = useRef(null)
    const sortedRef = useRef(null)
    const imageRef = useRef(null)
    const dim = [500, 500]

    useEffect(() => {
        Perlin.seed(0.3)
        const canvas = canvasRef.current;
        const image = imageRef.current;
        const ctx = canvas.getContext('2d');

        image.addEventListener('load', () => {
            ctx.drawImage(image, 0, 0);
            sort();
        });

    }, [imageRef])

    const sort = () => {
        const canvas = canvasRef.current;
        const sortedCanvas = sortedRef.current;
        const ctx = canvas.getContext('2d');
        const sortedCtx = sortedCanvas.getContext('2d');

        const imageData = ctx.getImageData(0, 0, dim[0], dim[0])
        let pixels = imageData.data;
        let groups = []

        for (let y = 0; y < dim[1]; y += 1) {
            let start = y * dim[0] * 4;
            let end = start + (dim[0] * 4)
            let temp = []
            
            for (let i = start; i < end; i += 4) {
                let group = [];
                group.push(pixels[i + 0])
                group.push(pixels[i + 1])
                group.push(pixels[i + 2])
                group.push(pixels[i + 3])

                temp.push(group)
            }

            // temp.sort((a, b) => (a[0] + a[1] + a[2]) - (b[0] + b[1] + b[2]))
            // temp.sort((a, b) => a[2]/a[1] - b[2])
            temp.sort((a, b) => RGBToHSL(a).h - RGBToHSL(b).h)

            groups.push(temp)
        }

        // groups.sort((a,b) => (a[a.length - 1][0]) - (b[a.length - 1][0]))
        // groups.sort((a,b) => (a[a.length/2][0] + a[a.length/2][1] + a[a.length/2][2]) - (b[a.length/2][0] + b[a.length/2][1] + b[a.length/2][2]))
        // groups.sort((a,b) => a[0][0] - b[0][0])

        for (let y = 0; y < dim[1]; y += 1) {
            let x = 0;
            let temp = groups[y];
            let start = y * dim[0] * 4;
            let end = start + (dim[0] * 4)

            for (let i = start; i < end; i += 4) {
                pixels[i] = temp[x][0];
                pixels[i + 1] = temp[x][1];
                pixels[i + 2] = temp[x][2];
                pixels[i + 3] = 255;
                x += 1;
            }
        }

        sortedCtx.putImageData(imageData, 0, 0, 0, 0, dim[0], dim[1]);
    }

    return (
        <div>
            <canvas width={dim[0]} height={dim[1]} ref={sortedRef}></canvas>
            <canvas width={dim[0]} height={dim[1]} ref={canvasRef}></canvas>
            <img style={{display: 'none'}} ref={imageRef} src={img} />
        </div>
    )
}

export default PixelSort;