import React from 'react';
import ReactDOM from 'react-dom';

import Home from './../pages/home/Home.jsx';

import './../pages/bundle.scss';

ReactDOM.render(
  <main>
    <Home />
  </main>
  , document.getElementById('react-root'));
