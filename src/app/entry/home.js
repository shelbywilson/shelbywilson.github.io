import React from 'react';
import ReactDOM from 'react-dom';

import App from './../components/App.jsx';
import Home from './../components/home/Home.jsx';

import reducers from './../reducers';

import './../components/bundle.scss';

ReactDOM.render(
  <App>
    <Home />
  </App>
  , document.getElementById('react-root'));
