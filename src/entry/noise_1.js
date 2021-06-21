import ReactDOM from 'react-dom';
import React, { Fragment } from 'react';

import NoiseD3 from '../pages/sketches/noise/NoiseD3';
import Header from '../header/Header';

import './../header/_header.scss';

ReactDOM.render(
    <Fragment>
        <Header url='/#/sketches' />
        <NoiseD3 />
    </Fragment>
  , document.getElementById('root'));
