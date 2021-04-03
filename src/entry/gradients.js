import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from "react-router-dom";

import './../header/_header.scss';
import './../header/_header-light.scss';

import Gradients from '../pages/gradients';
import Header from '../header/Header';

ReactDOM.render(
  <BrowserRouter>
    <Header url='/#/gradients' />
    <Gradients />
  </BrowserRouter>
  , document.getElementById('root'));