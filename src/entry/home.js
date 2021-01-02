import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from "react-router-dom";

import './../pages/home/_home.scss';

import Home from './../pages/home/Home';

ReactDOM.render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>
  , document.getElementById('root'));