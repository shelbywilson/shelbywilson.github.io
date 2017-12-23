import React from 'react';
import ReactDOM from 'react-dom';

import App from './../components/App.jsx';
import About from './../components/about/About.jsx';

import reducers from './../reducers';

import './../components/bundle.scss';

ReactDOM.render(
  <div>
    <About />
  </div>
  , document.getElementById('react-root'));
