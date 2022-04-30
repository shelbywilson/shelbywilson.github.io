import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from "react-router-dom";

import './../header/_header.scss';
import './../header/_header-light.scss';

import InteractiveGradients from '../pages/gradients/index-2';
import Header from '../header/Header';

ReactDOM.render(
  <BrowserRouter>
    <Header url='/#/gradients' />
    <InteractiveGradients />
  </BrowserRouter>
  , document.getElementById('root'));