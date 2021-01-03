import React from 'react';

export default () => {
    return (
        <div>
            <div style={{height: 340}}>
                <iframe src='/set#_no-header' 
                    style={{transform: 'scale(0.5)', transformOrigin: 'top left', height: '200%', width: '200%'}}
                    referrerPolicy='no-referrer' 
                    loading='lazy'></iframe>
            </div>
            <p>
                A card game. Each card has four properties – color, shape, shading, and number — and each of the 81 cards is unique. A <a href='https://en.wikipedia.org/wiki/Set_(card_game)' target='_blank'>Set</a> is a is created by finding three cards that are either all the same or all different for each property. 
            </p>
            <p>
                Play <a href='/set'>full screen</a>.
            </p>
            <p>
                Using: React.js, SCSS
            </p>
        </div>
    )
}