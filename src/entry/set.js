import ReactDOM from 'react-dom';
import React, { Fragment } from 'react';

import './../pages/set/_set.scss';

import Set from './../pages/set/Set';

// import './../header/_header.scss';
// import Header from '../header/Header';

ReactDOM.render(
    <Fragment>
        {/* <Header url='/#/set' /> */}
        <Set />
    </Fragment>
, document.getElementById('root'));