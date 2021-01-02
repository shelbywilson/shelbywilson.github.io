import React from 'react';
import SkyAboveClouds from '../../sky-above-clouds/SkyAboveClouds';

export default () => {
    return (
        <div>
            <p>
                A recreation of Georgia O'Keeffe's Sky Above Clouds IV.
            </p>
            <a href='/sky-above-clouds' 
                className='underline'
                style={{display: 'block'}}>
                <SkyAboveClouds />
                <p>
                    view full.
                </p>
            </a>
            <p>
                Using: HTML, SCSS, CSS transitions
            </p>
            <a href='https://www.artic.edu/artworks/100858/sky-above-clouds-iv' 
                className='underline'
                target='_blank'>
                <img src='https://www.artic.edu/iiif/2/8fa4d1dd-b05f-eb8d-b83f-7b5dd65642db/full/843,/0/default.jpg' alt=''/>
                <p>
                        Sky Above Clouds IV, Georgia O'Keeffe, 1965
                </p>
            </a>
        </div>
    )
}