import React from 'react';

export const SetSquiggle = ({card, color}) => {
    const patternId = `hatch-${card.id}`;
    return (
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 216 114" style={{enableBackground: "new 0 0 216 114", width: 42, height: 32, transform: "rotate(-6deg)", overflow: "visible"}} xmlSpace="preserve">
            <defs> 
                <pattern id={patternId} patternUnits="userSpaceOnUse" width="20" height="20">
                    <path d="M-5,5 l10,-10
                            M0,20 l20,-20
                            M15,25 l10,-10" 
                            style={{stroke:`${color}`, strokeWidth: 5}} />
                </pattern>
            </defs>
            <path style={{fill: card.k === 0 ? color : card.k === 1 ? `url(#${patternId})` : "rgba(255,255,255,0)", stroke: color, strokeWidth: 9}} d="M50.9,71.8c0.5-0.9,1.1-1.7,1.6-2.7c-3.6,7.2,0.4-0.7,2.2-2.4c3.6-3.4,5.4-6.6,10.3-6.6c6.8,0,15.5,11.5,20.6,17.5
                c9.8,11.3,19.8,21.3,32.9,27.3c34.2,15.8,68.9-5.1,88.8-37c18.9-30.4-25.3-59.2-44.1-29.1c4.3-7-1.4,1.8-4.7,5.3
                c-3.6,3.7-6.7,7-11.9,8.3c-8.4,2-14.6-3.8-20.7-10.4c-10.5-11.2-19.1-23.2-32.3-30.8C61.3-7.5,25.2,9.1,6.8,42.7
                C-10.5,74.3,33.6,103.3,50.9,71.8L50.9,71.8z"/>
        </svg>
    )
}

export default SetSquiggle;