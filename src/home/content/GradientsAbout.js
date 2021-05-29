import React from 'react';

import Gradients from './../../pages/gradients';
export default () => {
    return (
        <div>
            <Gradients explain={true}>

                <p>
                    Using: CSS transitions, React.js
                </p>
                <p>
                    View <a href='/gradients'>full screen</a> or <a href='/gradients/2.html'>interactive version</a>.    
                </p>
            </Gradients>
        </div>
    )
}