import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from "react-router-dom";

import './../home/_home.scss';
import GreyMatter from '../pages/grey-matter/index'

ReactDOM.render(
  <BrowserRouter>
    <GreyMatter />
  </BrowserRouter>
  , document.getElementById('root'));