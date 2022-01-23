import React from 'react';

import img1a from './../../images/clouds/sf.1a.jpg';
import img1b from './../../images/clouds/sf.1b.jpg';
import img2a from './../../images/clouds/vashon.1a.jpg';
import img2b from './../../images/clouds/vashon.1b.jpg';
import img3a from './../../images/clouds/aus.5a.jpg';
import img3b from './../../images/clouds/aus.5b.jpg';

export const CloudTownMeta = () => {
    return (
        <div>
            <iframe src='/cloud-town?_no-header' 
                scrolling='no' 
                referrerPolicy='no-referrer' 
                loading='lazy'></iframe>
            <p>
                A meditation on the sky, especially pink clouds, and the ocassional visitor – the moon, the sun, an airplane. Click <span style={{display: 'inline-block', width: 18, height: 18, borderRadius: '100%', background: '#ff4500'}}></span> for a new sky and hover to illuminate.
            </p>
            <p>
                View
                <a href='/cloud-town'> full screen</a> or 
                <a href='/cloud-diary'> all together</a>.
            </p>
            <p>
                Using: HTML, SCSS, some of the photos of clouds on my phone
            </p>
            <a href='/cloud-diary'>
                <figure className='img-container-padded'>
                    <img src={img1a} alt='still from Cloud Town' />
                </figure>
            </a>
            <a href='/cloud-town'>
                <figure className='img-container-padded first'>
                    <img src={img1b} alt='still from Cloud Town' />
                </figure>
            </a>
            <a href='/cloud-town'>
                <figure className='img-container-padded first'>
                    <img src={img2a} alt='still from Cloud Town' />
                </figure>
            </a>
            <a href='/cloud-diary'>
                <figure className='img-container-padded first'>
                    <img src={img2b} alt='still from Cloud Town' />
                </figure>
            </a>
            <a href='/cloud-diary'>
                <figure className='img-container-padded first'>
                    <img src={img3a} alt='still from Cloud Town' />
                </figure>
            </a>
            <a href='/cloud-town'>
                <figure className='img-container-padded first'>
                    <img src={img3b} alt='still from Cloud Town' />
                </figure>
            </a>
        </div>
    )
}

export default CloudTownMeta;