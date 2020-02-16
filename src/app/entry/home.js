import React from 'react';
import ReactDOM from 'react-dom';

import Home from './../components/home/Home.jsx';

import './../components/bundle.scss';

ReactDOM.render(
  <main>
    <Home />
  </main>
  , document.getElementById('react-root'));
