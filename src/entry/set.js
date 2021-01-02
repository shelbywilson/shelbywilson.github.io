import ReactDOM from 'react-dom';
import React, { Fragment } from 'react';

import './../pages/set/_set.scss';

import Set from './../pages/set/Set';

import './../pages/home/partials/_header.scss';
import Header from '../pages/home/Header';

ReactDOM.render(
    <Fragment>
        <Header url='/#/set' />
        <Set />
    </Fragment>
, document.getElementById('root'));