import React, { useState } from 'react';

export const GlassSlide = () => {
    const [state, setstate] = useState(false);

    const toggle = () => {
        setstate(prev => !prev);
    }
    return (
        <div className={`glass ${state ? 'open' : 'closed'}`} onClick={toggle}>
            <div className='pane-right'></div>
            <div className='pane-left'></div>
        </div>
    )
}

export default GlassSlide;