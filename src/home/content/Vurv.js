import React from 'react';

export const Vurv = () => {
    return (
        <div>
            <div className='iframe-container'>
                <iframe src='https://vurvco.github.io/network-viz/#define-yourself' 
                    referrerPolicy='no-referrer' 
                    loading='lazy'></iframe>
            </div>
            <p>
                An interactive visualization of <a href='https://vurv.co/' target='_blank' rel="noopener noreferrer nofollow">vûrv Collective</a> in Austin, TX based on a survey sent to members.
            </p>
            <p>
                In collaboration with <a href='https://dezein.co/' target="_blank" rel="noopener noreferrer nofollow">Adam Zeiner</a> and <a href='https://www.marioezekiel.com' target='_blank' rel="noopener noreferrer nofollow">Mario Ezekiel H</a>.
            </p>
            <p>
                View entire <a href='https://vurvco.github.io/network-viz/' target='_blank' rel="noopener noreferrer nofollow">Vurvey</a>.
             </p>
             <p>
                Using: d3.js
             </p>
        </div>
    )
}

export default Vurv;