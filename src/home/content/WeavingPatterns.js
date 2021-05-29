import React from 'react';

import gif from './../../images/weaving/weaving-1.gif';
import pdf from './../../images/files/weaving_patterns.pdf';
import img from './../../images/home/weaving-patterns.jpg';

export default () => {
    return (
        <div>
            <a href='/v1/patterns.html#84' target='_blank'>
                <figure className='img-container-padded first'>
                    <img style={{marginBottom: -1, marginTop: -120}} src={gif} alt=''/>
                </figure>
            </a>
            <p>
                A translation, encoding, and interactive weaving pattern builder.
            </p>
            <p>
                View <a href='/v1/patterns.html' target='_blank'>V1 Patterns</a> and <a href='/v1/patterns/builder.html' target='_blank'>V1 Pattern Builder</a>.
            </p>
            <p>
                View <a href='https://docs.google.com/spreadsheets/d/14cHiAR2vfwNmJ0CbpPeCxDsDBv_r5AJEE3nTOH_kOj0/edit?usp=sharing' target='_blank'>glossary of weaving terms</a>.
            </p>
            <p>
                This project began in 2013 as a translation of a 1912 Russian <a href={pdf} target="_blank">Album of Weaving Patterns</a> for my mom, who is a weaver.
            </p>
            <p>
                Floor loom weaving drafts are composed of three parts: threading, tie-up, and treadling sequence. The threading is repeated horizontally to achieve the desired fabric width while the treadling is repeated to achieve the desired length. Some patterns have multiple treadlings which will produce variations.
            </p>
            <p>
                Since the source material is a pdf, I first transcribed it as written. Then, because it was published in 1912, prior to the <a href="https://en.wikipedia.org/wiki/Reforms_of_Russian_orthography#The_post-revolution_reform" target="_blank"> post-revolution reform</a> of Russian orthography, I translated old syntax to modern. Finally, I translated to English. 
            </p>
            <p>
                In order to produce dynamically generated swatch, I encoded each pattern as an array of binary. An SVG is then created from the three parts of each pattern.
            </p>
            <a href='/v1/patterns.html' target='_blank'>
                <figure className='img-container-padded first'>
                    <img src={img} alt='Swatch, treadling, tie-up, and treading' />
                </figure>
            </a>
            <p>
                Using: d3.js, React.js
            </p>
        </div>
    )
}