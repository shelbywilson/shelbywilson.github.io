import React, { useEffect, useRef, useState } from 'react';
import clouds from './../../pages/cloud-town/data/index.js';
import { RGBToHSL } from './util';

export const PixelSort = () => {
    const canvasRef = useRef(null)
    const sortedRef = useRef(null)
    const imageRef = useRef(null)
    const dim = [540, 540]
    const [img, setImg] = useState(Math.floor(Math.random() * Object.keys(clouds).length))

    useEffect(() => {
        const canvas = canvasRef.current;
        const image = imageRef.current;
        const ctx = canvas.getContext('2d');

        image.addEventListener('load', () => {
            ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, dim[0], dim[1]);
            sort();
        });

    }, [imageRef])

    const setNewImg = () => {
        setImg(prev => {
            if (prev === Object.keys(clouds).length - 1) {
                return 0
            } 
            return prev += 1
        })
    }

    const sort = (param = 'h') => {
        const canvas = canvasRef.current;
        const sortedCanvas = sortedRef.current;
        const ctx = canvas.getContext('2d');
        const sortedCtx = sortedCanvas.getContext('2d');
        const imageData = ctx.getImageData(0, 0, dim[0], dim[1])
        let pixels = imageData.data;
        // let groups = []

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
            temp.sort((a, b) => RGBToHSL(a)[param] - RGBToHSL(b)[param])

            // groups.push(temp)
        // }

        // console.log('sort 1')

        // groups.sort((a,b) => RGBToHSL(a[0]).h - RGBToHSL(b[0]).h)

        // for (let y = 0; y < dim[1]; y += 1) {
            let x = 0;
            // let temp = groups[y];
            // let start = y * dim[0] * 4;
            // let end = start + (dim[0] * 4)

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
            <div className='d-flex flex-row justify-content-end'>
                <button onClick={setNewImg} style={{fontSize: '3rem', marginBottom: '2rem'}}>
                    ☁️
                </button>
            </div>
            <div onMouseEnter={() => sort('l')} 
                onMouseLeave={() => sort('h')} 
                className='d-flex flex-row justify-content-end flex-column-xs'>
                <canvas width={dim[0]} height={dim[1]} ref={sortedRef}></canvas>
                <canvas width={dim[0]} height={dim[1]} ref={canvasRef}></canvas>
            </div>
            <div style={{maxWidth: dim[0]}}>
                <img style={{display: 'none'}} ref={imageRef} src={clouds[Object.keys(clouds)[img]].src_small} />
            </div>
        </div>
    )
}

export default PixelSort;