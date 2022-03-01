import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from "react-router-dom";

import Layouts from '../pages/html-review';

ReactDOM.render(
  <BrowserRouter>
    <Layouts />
  </BrowserRouter>
  , document.getElementById('root'));