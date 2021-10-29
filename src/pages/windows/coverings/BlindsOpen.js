import React, { Fragment, useState } from 'react';

export default () => {
    const [state, setstate] = useState(false);

    const toggle = () => {
        setstate(prev => !prev);
    }
    return (
        <div className={`blinds-1 ${state ? 'open' : 'closed'}`} onClick={toggle}>
            {[1,2,3,4,5,6,7,8,9,10,11,12,13].map((i) => (
                <div key={i}></div>
            ))}
        </div>
    )
}