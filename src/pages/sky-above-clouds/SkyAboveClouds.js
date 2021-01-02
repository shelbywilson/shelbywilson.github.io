import React from 'react';

import './_sky-above-clouds.scss';

export default () => {
    const getClouds = () => {
        let i = 0;
        let clouds = [];
        let rowSize = 22;
        let rowCounter = 0;
        let colCounter = 0;
        let width;
        let inner;

        while (i < 139) {
            width = 80/rowSize + (Math.random() * 35/rowSize);

            rowCounter += width + 4/rowSize;

            if (rowCounter >= 99) {
                if (rowSize > 3) {
                    if (rowSize > 14) {
                        rowSize -= 2;
                    }
                    rowSize -= 1;
                }
                rowCounter = width + 4/rowSize;
                colCounter = 0;
                clouds.push(<span className='spacer' key={'spacer' + i}></span>)
            }

            colCounter += 1;

            if (rowSize === 4 && colCounter === 2) {
                //inner = <h1>Shelby Wilson</h1>
            } else {
                inner = null;
            }

            clouds.push(
                <div key={i} style={{
                    flex: `1 1 ${width}%`,
                    height: `${Math.pow(1/rowSize, 2.32) * 420}vh`,
                    margin: `${1/rowSize}% ${2/rowSize}%`,
                    borderBottomRightRadius: `${Math.round(60 + Math.random() * 20)}%`,
                    borderBottomLeftRadius: `${Math.round(60 + Math.random() * 20)}%`,
                    borderTopRightRadius: `${Math.round(60 + Math.random() * 20)}%`,
                    borderTopLeftRadius: `${Math.round(60 + Math.random() * 20)}%`,
                }}>
                    {inner}
                </div>
            )
            
            i += 1;
        }

        return clouds;
    }

    return (
        <div className='sky-above-clouds'>
            <div className='above'>
            </div>
            <div className='below'>
                <div className='cloud-container'>
                    <div className='clouds'>
                        {getClouds()}
                    </div>
                </div>
            </div>
        </div>
    )
}