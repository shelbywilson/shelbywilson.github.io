import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from "react-router-dom";

import './../home/_home.scss';
import './../header/_header.scss';

import Vases from '../pages/vases/Vases'
import Header from '../header/Header';

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Vases />
  </BrowserRouter>
  , document.getElementById('root'));