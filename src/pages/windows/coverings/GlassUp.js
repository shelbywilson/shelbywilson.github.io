import React, { useState } from 'react';

export const GlassUp = () => {
    const [up, setUp] = useState(false);

    const toggle = () => {
        setUp(prev => !prev);
    }
    return (
        <div className={`glass ${up ? 'up' : 'down'}`} onClick={toggle}>
            <div className='pane-top'></div>
            <div className='pane-bottom'></div>
        </div>
    )
}

export default GlassUp;