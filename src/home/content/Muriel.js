import React from 'react';

import muriel3 from './../../images/home/muriel-3.png';
import muriel from './../../images/muriel/muriel.jpg';
import muriel2 from './../../images/muriel/muriel-2.jpg';
import murielGif from './../../images/muriel/muriel.gif';
import murielrotating from './../../images/muriel/muriel-rotating.png';
import murielrotating2 from './../../images/muriel/muriel-rotating-2.gif';
import UsingList from '../../common/UsingList';
import { getTechnologies } from '../routes';

export const Muriel = () => {
    return (
        <div>
            <img src={muriel3} alt='' />
            <p>
                A kind of digital tapestry, the result of an experiment while studying <a href='https://en.wikipedia.org/wiki/Muriel_Cooper' target='_blank' rel="noreferrer">Muriel Cooper</a> and her work with typography at <a href='https://sfpc.io/' target='_blank' rel="noreferrer">SFPC</a> Fall 2019.
            </p>
            <p>
                This application accepts text input. The vectors in each character are then represented by vertical lines that are distributed evenly from left to right. Simpler characters (e.g. ‘l’ or ‘-’) have fewer points, more complex or round characters (e.g. ‘o’ or ’8’) have more. Color is determined by ASCII code, either red, yellow, or blue.
            </p>
            <UsingList list={getTechnologies('muriel')} />
            <p>
                View <a href='https://github.com/shelbywilson/sfpc-rtp/tree/master/muriel' target='_blank' rel="noreferrer">Source code</a> and <a href='https://github.com/shelbywilson/sfpc-rtp' target='_blank' rel="noreferrer">more examples</a>.
            </p>
            <figure className='img-container-padded first'>
                <a href='https://github.com/shelbywilson/sfpc-rtp/tree/master/muriel' 
                    target='_blank' rel="noreferrer">
                    <img src={muriel2} alt='' />
                </a>
            </figure>
            <figure className='img-container-padded'>
                <a href='https://github.com/shelbywilson/sfpc-rtp/tree/master/muriel' 
                    target='_blank' rel="noreferrer">
                    <img src={muriel} alt='' />
                </a>
            </figure>
            <figure className='img-container-padded'>
                <a href='https://github.com/shelbywilson/sfpc-rtp/tree/master/muriel' 
                    target='_blank' rel="noreferrer"
                    className='img-container-padded'>
                    <img src={murielGif} alt='' />
                </a>
            </figure>
            <figure className='img-container-padded'>
                <a href='https://github.com/shelbywilson/sfpc-rtp/tree/master/muriel3' 
                    target='_blank' rel="noreferrer"
                    className='img-container-padded'>
                    <img src={murielrotating} alt='' />
                </a>
            </figure>
            <p>
                Another experiment in which characters appear to rotate as if looking at them from the side.
            </p>
            <p>
                View <a href='https://github.com/shelbywilson/sfpc-rtp/tree/master/muriel3' target='_blank' rel="noreferrer">Source code</a>.
            </p>
            <figure className='img-container-padded first' style={{height: 200, overflow: 'hidden'}}>
                <a href='https://github.com/shelbywilson/sfpc-rtp/tree/master/muriel3' 
                    target='_blank' rel="noreferrer"
                    className='img-container-padded'>
                    <img src={murielrotating2} alt='' />
                </a>
            </figure>
        </div>
    )
}

export default Muriel;