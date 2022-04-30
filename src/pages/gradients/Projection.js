import React from 'react';

import Gradients from './index';

const size = 500;

export const Projection = () => {

    return (
        <div style={{background: '#000', width: '100%', height: '100%', position: 'absolute'}}>
            <div style={{
                position: 'absolute', 
                left: `calc(50% - ${size/2}px)`, 
                top: `calc(50% - ${size/2}px)`, 
                width: size, 
                height: size, 
                borderRadius: '100%',
                overflow: 'hidden'}}>
            <Gradients />
            </div>
        </div>
    )
}

export default Projection;