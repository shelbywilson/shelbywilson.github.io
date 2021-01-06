import React, { Fragment, useEffect, useState } from 'react';

export default (props) => {
    const {
        width = 400,
        widthUnits = 'px',
        height = '60vh',
    } = props;

    return (
        <Fragment>
            <div className='spacer' style={{            
                right: 0,
                height: height,
                position: 'absolute',
                width: `calc(50vw - ${width/2}${widthUnits})`,
            }}>
                <div className={`window`} style={{
                        width: `${width}${widthUnits}`,
                        left: `${-width}${widthUnits}`
                    }}>
                    {props.children}
                </div>
            </div>

            <div className='spacer' style={{
                height: height,
                width: `calc(50vw - ${width/2}${widthUnits})`,
                left: 0,
            }}></div>

            <div className='spacer' style={{
                width: '100%',
                height: '80vh',
            }}></div>

        </Fragment>
    )
}