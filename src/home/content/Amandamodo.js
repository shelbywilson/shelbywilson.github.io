import React from 'react';

import amandamodo from './../../images/home/amandamodo.jpg';
import UsingList from '../../common/UsingList';
import { getTechnologies } from '../routes';

export const Amandamodo = () => {
    return (
        <div>
            <figure>
                <img src={amandamodo} alt="screenshot of amandamodo.com with a pink grasshopper" />
            </figure>
            <p>
                Visit <a href='http://amandamodo.com' target='_blank' rel="noreferrer">Amanda's portfolio</a>.
             </p>
             <UsingList list={getTechnologies('amandamodo')}/>
        </div>
    )
}

export default Amandamodo;