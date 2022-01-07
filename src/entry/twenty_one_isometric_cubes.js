import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from "react-router-dom";

import './../home/_home.scss';

import Sketch from '../pages/sketches/2022-01-05'

ReactDOM.render(
  <BrowserRouter>
    <div style={{height: '100vh', width: '100vw'}}>
        <Sketch preserveAspectRatio={false}/>
    </div>
  </BrowserRouter>
  , document.getElementById('root'));