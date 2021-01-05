import React from 'react';

import table from './../../../images/home/table.png';
import table2 from './../../../images/home/table-2.png';

export default () => {
    return (
        <div>
            <figure className='img-container first' style={{marginTop: 0, marginBottom: 40}}>
                <img src={table} alt='table upright' />
            </figure>
            <p>
                In collaboration with <a href='https://spacefiller.space/' target='_blank'>Alex Miller</a>.
            </p>
            <p>
                Using: Baltic birch, dado blade
            </p>
            <figure className='img-container' style={{overflow: 'visible'}}>
                <img src={table2} alt='table sideways' className='spin' />
            </figure>
        </div>
    )
}