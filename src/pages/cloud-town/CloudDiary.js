import React from 'react';

import data from './data';

export default () => {
    return (
        <div className='cloud-diary'>
            {Object.keys(data).map((cloud, i) => (
                <iframe key={i} 
                    src={`/cloud-town#${i + 1}_no-header`} 
                    scrolling='no' 
                    referrerPolicy='no-referrer' 
                    loading='lazy'
                    >
                </iframe>
            ))}
        </div>
    )
}