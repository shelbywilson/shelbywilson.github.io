import ReactDOM from 'react-dom';
import React, { Fragment } from 'react';
// import { BrowserRouter } from "react-router-dom";

import './../header/_header.scss';
import Header from '../header/Header';

import './../pages/windows/_windows.scss';
import './../pages/rooms/partials/_room-1.scss';

import Room1 from '../pages/rooms/Room1Shadows';

ReactDOM.render(
  <Fragment>
    <Header url='/#/sketches' />
    <Room1 />
  </Fragment>
  , document.getElementById('root'));