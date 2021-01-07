import React from 'react';

import Window from './Window';

export default (props) => {
    const {
        width = 400,
        widthUnits = 'px',
        height = '60vh',
        maxWidth = 100,
        maxWidthUnits = 'vw',
    } = props;

    return (
        <div style={{position: 'relative'}}>
            <div className='spacer' style={{            
                right: 0,
                height: height,
                position: 'absolute',
                width: `calc(${maxWidth/2}${maxWidthUnits} - ${width/2}${widthUnits})`,
            }}>
            </div>

            <div className='spacer' style={{
                height: height,
                width: `calc(${maxWidth/2}${maxWidthUnits} - ${width/2}${widthUnits})`,
                left: 0,
            }}></div>

            <div className='spacer' style={{
                width: '100%',
                height: '80vh',
            }}></div>

            <Window width={width}
                widthUnits={widthUnits}
                height={height}
                maxWidth={maxWidth}
                maxWidthUnits={maxWidthUnits}
                >
                {props.children}
            </Window>
        </div>
    )
}