import React, { useEffect, useRef } from 'react';
import img_daisy_field_2 from './../../images/daisy-field/daisy-field-2.jpeg';

export const PixelSort = () => {
    const canvasRef = useRef(null)
    const sortedRef = useRef(null)
    const imageRef = useRef(null)
    const dim = [500, 500]

    useEffect(() => {
        const canvas = canvasRef.current;
        const image = imageRef.current;
        const ctx = canvas.getContext('2d');

        image.addEventListener('load', () => {
            ctx.drawImage(image, 0, 0);
            sort();
        });

    }, [imageRef])

    const toRgba = (arr) => {
        let rgb = [];

        while (rgb.length < arr.length/4) {
            rgb.push(
                [
                    arr[rgb.length + 0],
                    arr[rgb.length + 1],
                    arr[rgb.length + 2],
                    arr[rgb.length + 3],
                ]
            )
        }

        return sortRgba(rgb);
    }

    const sortRgba = (arr) => {

        return arr
        // return arr.sort((a, b) => a[sortByIndex] - b[sortByIndex])
    }

    const sort = () => {
        const canvas = canvasRef.current;
        const sortedCanvas = sortedRef.current;
        const ctx = canvas.getContext('2d');
        const sortedCtx = sortedCanvas.getContext('2d');
        let y = 0;

        const interval = setInterval(() => {
            const sortedRow = toRgba(ctx.getImageData(0, y, dim[0], 1).data)

            sortedRow.forEach((pix, x) => {
                const toDraw = ctx.getImageData(x, y, 1, 1);
                let pixels = toDraw.data;

                pixels[0] = pix[0];
                // pixels[1] = pix[1];
                // pixels[2] = pix[2];
                // pixels[3] = pix[3];

                sortedCtx.putImageData(toDraw, x, y);
            })

            y += 1

            if (y >= dim[1]) {
                clearInterval(interval);
            }
        }, 5)
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