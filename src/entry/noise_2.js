import ReactDOM from 'react-dom';
import React, { Fragment } from 'react';

import NoiseCanvas from '../pages/sketches/noise/NoiseCanvas';
import Header from '../header/Header';

import './../header/_header.scss';

ReactDOM.render(
    <Fragment>
        <Header url='/#/sketches' />
        <NoiseCanvas />
    </Fragment>
  , document.getElementById('root'));
