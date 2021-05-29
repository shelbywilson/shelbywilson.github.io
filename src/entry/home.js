import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from "react-router-dom";

import './../home/_home.scss';
import './../header/_header.scss';

import Home from './../home/Home';

ReactDOM.render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>
  , document.getElementById('root'));