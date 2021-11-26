import React from 'react';
import SkyAboveClouds from './../../pages/sky-above-clouds/SkyAboveClouds';

export default () => {
    return (
        <div>
            <p>
                A procedurally generated recreation of Georgia O'Keeffe's Sky Above Clouds IV.
            </p>
            <a href='/sky-above-clouds' 
                style={{display: 'block'}}>
                <SkyAboveClouds />
            </a>
            <p>
                <a href='/sky-above-clouds' >
                    View full
                </a>.
            </p>
            <p>
                Using: HTML, SCSS, CSS transitions
            </p>
            <figure style={{marginTop: 100}}>
                <img src='https://www.artic.edu/iiif/2/8fa4d1dd-b05f-eb8d-b83f-7b5dd65642db/full/843,/0/default.jpg' alt=''/>
                <figcaption>
                    <a href='https://www.artic.edu/artworks/100858/sky-above-clouds-iv' 
                        target='_blank'>
                            Sky Above Clouds IV, Georgia O'Keeffe, 1965
                    </a>
                </figcaption>
            </figure>
        </div>
    )
}