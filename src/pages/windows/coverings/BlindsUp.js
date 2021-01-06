import React, { Fragment, useState } from 'react';

export default () => {
    const [up, setUp] = useState(false);

    const toggle = () => {
        setUp(prev => !prev);
    }
    return (
        <div className={`blinds-horizontal ${up ? 'up' : 'down'}`} onClick={toggle}>
            {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24].map((i) => (
                <div key={i}></div>
            ))}
        </div>
    )
}