import React from 'react';

import cherries from './../../../images/still-life/cherries-1.png';
import cup1 from './../../../images/still-life/cup-1.png';
import cup2 from './../../../images/still-life/cup-2.png';
import peach from './../../../images/still-life/peach.png';
import plum from './../../../images/still-life/plum.png';
import cherry from './../../../images/still-life/cherry.png';
import stilllifephoto from './../../../images/still-life/still-life-photo.jpg';

export default () => {
    return (
        <div>
            <iframe src='https://editor.p5js.org/shelbyw/present/WZD9BWwwQ' 
            scrolling='no' 
            referrerPolicy='no-referrer' 
            loading='lazy'></iframe>
            <p>
                A response to <a href='https://www.instagram.com/stillherestilllife/' target='_blank'>@stillherestilllife</a> week <a href='https://www.instagram.com/p/CF785-vhhaG/' target='_blank'>27</a>. Click to rotate, pan, zoom.
            </p>
            <p>
                View <a href="https://editor.p5js.org/shelbyw/present/WZD9BWwwQ" target='_blank'>full screen</a> or <a href="https://editor.p5js.org/shelbyw/sketches/WZD9BWwwQ" target='_blank'>online editor</a>.
            </p>
            <p>
                Using: p5.js
            </p>

            <figure>
                <img style={{height: 100}} src={cherries} alt="cherries"/>
            </figure>

            <figure>
                <img style={{height: 400}} src={stilllifephoto} alt='Still Life photo by Victoria Jane Photo'/>
                <figcaption>

                    <a href='https://www.instagram.com/p/CGICi-sl4nH/'
                    target='_blank'>
                        @victoriajane_photo
                    </a>
                </figcaption>
            </figure>

            <figure>
                <img style={{margin: '60px auto', height: 120}} src={peach} alt='peach'/>
            </figure>
            <figure>
                <img style={{margin: '60px auto', height: 180}} className='spin' src={cup1} alt='upside down glass' />
            </figure>
            <figure>
                <img style={{margin: '60px auto', height: 260}} src={cup2} alt='glass with strawberries'/>
            </figure>
            <figure>
                <img style={{margin: '60px auto', height: 80, transform: 'rotate(-10deg)'}} src={plum} alt='plum'/>
            </figure>
            <figure>
                <img style={{margin: '60px auto', height: 100}} src={cherry} alt='cherry'/>
            </figure>
        </div>
    )
}