import React from 'react';

import data from './data';

export default () => {
    const clouds = Object.keys(data).sort((a,b) => {
        return data[b].date.localeCompare(data[a].date)
    });

    return (
        <div className='cloud-diary'>
            {clouds.map((cloud, i) => (
                <div key={i}
                    className='cloud-diary__container'
                    >
                    <iframe 
                        src={`/cloud-town?${i + 1}_no-header_locked`} 
                        scrolling='no' 
                        referrerPolicy='no-referrer' 
                        loading='lazy'
                        >
                    </iframe>
                    <a className='cloud-diary__label'
                        href={`/cloud-town?${i + 1}_show-label`}>
                        <p>
                            {data[cloud].city}
                            <br/>
                            {data[cloud].date} {data[cloud].time} 
                        </p>
                    </a>
                </div>
            ))}
        </div>
    )
}