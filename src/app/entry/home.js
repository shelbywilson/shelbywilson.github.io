import React from 'react';
import ReactDOM from 'react-dom';

import Home from './../components/home/Home.jsx';

import reducers from './../reducers';

import './../components/bundle.scss';

ReactDOM.render(
  <div>
    <Home />
  </div>
  , document.getElementById('react-root'));
