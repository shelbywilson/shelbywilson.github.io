import React from 'react';
import Corners from './../../sketches/corners';
import NoiseD3 from '../../sketches/noise/NoiseD3';
import NoiseCanvas from '../../sketches/noise/NoiseCanvas';
import { sketches } from '../routes';

export default () => {
    return (
        <div>
            <section>
                <h3>
                    20 February 2021
                </h3>
                {/* <NoiseCanvas /> */}
                <NoiseD3 />
                <p>
                    Using: d3.js, Perlin noise
                </p>
            </section>
            <section>
                <h3>
                    17 February 2021
                </h3>
                <Corners />
                <p>
                    Using: d3.js
                </p>
            </section>
            <section>
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
                <p>
                    Using: React.js, SCSS
                </p>
            </section>
            <section>
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
                <p>
                    Using: React.js, SCSS
                </p>
            </section>
            <section>
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
            </section>
        </div>
    )
}