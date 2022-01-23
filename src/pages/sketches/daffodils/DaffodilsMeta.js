import React from 'react';
import UsingList from '../../../common/UsingList';
import { getTechnologies } from '../../../home/routes';

export const DaffodilsMeta = () => {
    const using = getTechnologies('daffodils');

    return (
        <div>
            <iframe src='/daffodils?_no-header' 
                scrolling='no' 
                referrerPolicy='no-referrer' 
                loading='lazy'></iframe>
            <UsingList list={using} />
            <p>
                View <a href='/daffodils'>full screen</a>.    
            </p>
        </div>
    )
}

export default DaffodilsMeta