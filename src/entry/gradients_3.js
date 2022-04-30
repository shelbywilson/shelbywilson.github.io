import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from "react-router-dom";

import Projection from '../pages/gradients/Projection';

ReactDOM.render(
  <BrowserRouter>
    <Projection />
  </BrowserRouter>
  , document.getElementById('root'));