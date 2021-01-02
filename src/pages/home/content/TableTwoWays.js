import React from 'react';

import table from './../../../images/home/table.png';
import table2 from './../../../images/home/table-2.png';

export default () => {
    return (
        <div>
            <p>
                In collaboration with <a href='https://spacefiller.space/' target='_blank'>Alex Miller</a>.
            </p>
            <p>
                Using: baltic birch, dado blade
            </p>
            <div style={{marginTop: 60}}>
                <img src={table2} alt='table sideways' className='spin' />
            </div>
            <div className='img-container'>
                <img src={table} alt='table upright' />
            </div>
        </div>
    )
}