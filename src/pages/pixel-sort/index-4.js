import React, { useEffect, useRef } from 'react';
import img_daisy_field_2 from './../../images/daisy-field/daisy-field-2.jpeg';
// @ts-ignore
import Perlin from 'perlin.js';

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
            temp.sort((a, b) => (a[1] + a[2]) - (b[1] + b[2]))

            let x = 0;

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
            <img ref={imageRef} src={img_daisy_field_2} />
        </div>
    )
}

export default PixelSort;