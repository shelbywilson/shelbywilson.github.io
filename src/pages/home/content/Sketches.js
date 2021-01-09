import React from 'react';

export default () => {
    return (
        <div>
            <h3>
                8 January 2021
            </h3>
            <iframe src='/room-with-a-window?_no-header' style={{
                transform: 'scale(0.5)',
                width: '200%',
                height: '1000px',
                transformOrigin: 'top left',
                marginBottom: '-500px',
            }}></iframe>
            <p>
                View&nbsp;
                <a href='/room-with-a-window'>
                    A room with a window
                </a>.
            </p>
            <p style={{marginBottom: '140px'}}>
                Using: React.js, SCSS
            </p>
            <h3>
                5 January 2021
            </h3>
            <iframe src='/windows?_no-header' style={{
                transform: 'scale(0.5)',
                width: '200%',
                height: '1000px',
                transformOrigin: 'top left',
                marginBottom: '-500px',
            }}></iframe>
            <p>
                View&nbsp;
                <a href='/windows'>
                    windows
                </a>.
            </p>
            <p style={{marginBottom: '140px'}}>
                Using: React.js, SCSS
            </p>
            <h3>
                November 2020
            </h3>
            <iframe src='/monolith?_no-header'></iframe>
            <p>
                View&nbsp;
                <a href='/monolith'>
                    Monolith
                </a>.
            </p>
            <p>
                Following Red Stapler's <a href='https://redstapler.co/create-3d-world-with-three-js-and-skybox-technique/' target='_blank'>tutorial</a>.
            </p>
            <p>
                Using: Three.js
            </p>
        </div>
    )
}