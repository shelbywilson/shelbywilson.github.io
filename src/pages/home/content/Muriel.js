import React from 'react';

import muriel3 from './../../../images/home/muriel-3.png';
import muriel from './../../../images/muriel/muriel.jpg';
import muriel2 from './../../../images/muriel/muriel-2.jpg';
import murielGif from './../../../images/muriel/muriel.gif';
import murielrotating from './../../../images/muriel/muriel-rotating.png';
import murielrotating2 from './../../../images/muriel/muriel-rotating-2.gif';

export default () => {
    return (
        <div>
            <img src={muriel3} alt='' />
            <p>
                A kind of digital tapestry, the result of an experiment while studying <a href='https://en.wikipedia.org/wiki/Muriel_Cooper' target='_blank'>Muriel Cooper</a> and her work with typography at <a href='https://sfpc.io/' target='_blank'>SFPC</a> Fall 2019.
            </p>
            <p>
                This application accepts text input. The vectors in each character are then represented by vertical lines that are distributed evenly from left to right. Simpler characters (e.g. ‘l’ or ‘-’) have fewer points, more complex or round characters (e.g. ‘o’ or ’8’) have more. Color is determined by ASCII code, either red, yellow, or blue.
            </p>
            <p>
                Using: OpenFrameworks
            </p>
            <p>
                View <a href='https://github.com/shelbywilson/sfpc-rtp/tree/master/muriel' target='_blank'>Source code</a> and <a href='https://github.com/shelbywilson/sfpc-rtp' target='_blank'>more examples</a>.
            </p>
            <div className='img-container first'>
                <a href='https://github.com/shelbywilson/sfpc-rtp/tree/master/muriel' 
                    target='_blank'>
                    <img src={muriel2} alt='' />
                </a>
            </div>
            <div className='img-container'>
                <a href='https://github.com/shelbywilson/sfpc-rtp/tree/master/muriel' 
                    target='_blank'>
                    <img src={muriel} alt='' />
                </a>
            </div>
            <div className='img-container'>
                <a href='https://github.com/shelbywilson/sfpc-rtp/tree/master/muriel' 
                    target='_blank'
                    className='img-container'>
                    <img src={murielGif} alt='' />
                </a>
            </div>
            <div className='img-container'>
                <a href='https://github.com/shelbywilson/sfpc-rtp/tree/master/muriel3' 
                    target='_blank'
                    className='img-container'>
                    <img src={murielrotating} alt='' />
                </a>
            </div>
            <p>
                Another experiment in which characters appear to rotate as if looking at them from the side.
            </p>
            <p>
                View <a href='https://github.com/shelbywilson/sfpc-rtp/tree/master/muriel3' target='_blank'>Source code</a>.
            </p>
            <div className='img-container first' style={{height: 200, overflow: 'hidden'}}>
                <a href='https://github.com/shelbywilson/sfpc-rtp/tree/master/muriel3' 
                    target='_blank'
                    className='img-container'>
                    <img src={murielrotating2} alt='' />
                </a>
            </div>
        </div>
    )
}