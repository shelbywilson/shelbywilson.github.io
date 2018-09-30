import React from 'react';
import ReactDOM from 'react-dom';

import App from './../components/App.jsx';
import PatternApp from './../components/patterns/PatternApp.jsx';

import reducers from './../reducers';

import './../components/bundle.scss';

ReactDOM.render(
  <PatternApp />
  , document.getElementById('react-root'));
