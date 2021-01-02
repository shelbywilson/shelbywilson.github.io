import React from 'react';

import data from './data';

export default () => (
    <div className='cloud-diary'>
        {Object.keys(data).map((cloud, i) => (
            <iframe key={i} 
                src={`cloud-town?no-header#${i + 1}`} 
                scrolling='no' 
                referrerPolicy='no-referrer' 
                loading='lazy'
                >
            </iframe>
        ))}
    </div>
)