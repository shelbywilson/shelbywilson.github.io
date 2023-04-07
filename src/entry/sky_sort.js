import ReactDOM from 'react-dom';
import React, { Fragment } from 'react';
import PixelSort from '../pages/pixel-sort';

import './../base/_base.scss';

import './../header/_header.scss';
import Header from '../header/Header';

ReactDOM.render(
  <Fragment>
    <Header url='/#/sketches' />
    <div style={{padding: '6rem 1rem', margin: '0 auto', width: 'min-content'}}>
      <PixelSort />
    </div>
  </Fragment>
  , document.getElementById('root'));
