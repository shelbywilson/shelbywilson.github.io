import React from 'react';

import Gradients from './index';
import './_projection.scss';

const size = 500;

export const Projection = () => {

    return (
        <div className="projection" style={{}}>
            <div className="projection-wrapper"
                style={{
                    left: `calc(50% - ${size/2}px)`, 
                    top: `calc(50% - ${size/2}px)`, 
                    width: size, 
                    height: size
                }}>
                <Gradients />
            </div>
        </div>
    )
}

export default Projection;