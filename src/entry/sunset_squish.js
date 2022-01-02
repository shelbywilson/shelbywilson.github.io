import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from "react-router-dom";

import './../home/_home.scss';

import Sketch from '../pages/sketches/2021-12-01/index_squish_2'

ReactDOM.render(
  <BrowserRouter>
    <Sketch />
  </BrowserRouter>
  , document.getElementById('root'));