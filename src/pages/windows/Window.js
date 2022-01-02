import React from 'react';

export const Window = (props) => {
    const {
        width = 400,
        widthUnits = 'px',
        height = '60vh',
        maxWidth = 100,
        maxWidthUnits = 'vw',
    } = props;

    return (
        <div className={`window`} style={{
                width: `${width}${widthUnits}`,
                left: `calc(${maxWidth/2}${maxWidthUnits} - ${width/2}${widthUnits})`,
                height: height,
                top: 0,
            }}>
            {props.children}
        </div>
    )
}

export default Window;