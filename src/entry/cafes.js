import ReactDOM from 'react-dom';
import React, { Fragment } from 'react';

import './../base/_base.scss';
import './../header/_header.scss';
// import Header from '../header/Header';
import Cafes from '../pages/cafes/Cafes';

ReactDOM.render(
  <Fragment>
    {/* <Header /> */}
    <Cafes />
  </Fragment>
  , document.getElementById('root'));