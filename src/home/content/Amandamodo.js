import React from 'react';

import amandamodo from './../../images/home/amandamodo.jpg';

export const Amandamodo = () => {
    return (
        <div>
            <figure>
                <img src={amandamodo} alt="screenshot of amandamodo.com with a pink grasshopper" />
            </figure>
            <p>
                Visit <a href='http://amandamodo.com' target='_blank' rel="noreferrer">Amanda's portfolio</a>.
             </p>
             <p>
                Using: React.js, SCSS, web scraping
             </p>
        </div>
    )
}

export default Amandamodo;