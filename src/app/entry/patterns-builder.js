import React from 'react';
import ReactDOM from 'react-dom';

import App from './../components/App.jsx';
import Patterns from './../components/patterns/PatternBuilder.jsx';

import reducers from './../reducers';

import './../components/bundle.scss';

ReactDOM.render(
  <App>
    <PatternBuilder />
  </App>
  , document.getElementById('react-root'));
