import ReactDOM from 'react-dom';
import React, { Fragment } from 'react';

import './../pages/sky-above-clouds/_sky-above-clouds.scss';
import SkyAboveClouds from './../pages/sky-above-clouds/SkyAboveClouds';

import './../pages/home/partials/_header.scss';
import Header from '../pages/home/Header';

ReactDOM.render(
  <Fragment>
    <Header url='/#/sky-above-clouds' />
    <SkyAboveClouds />
  </Fragment>
  , document.getElementById('root'));
