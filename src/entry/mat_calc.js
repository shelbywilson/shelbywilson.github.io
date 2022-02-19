import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from "react-router-dom";

import './../home/_home.scss';
import MatCalc from '../pages/mat-calc/MatCalc';

ReactDOM.render(
  <BrowserRouter>
    <MatCalc />
  </BrowserRouter>
  , document.getElementById('root'));