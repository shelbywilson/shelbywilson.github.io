import React from 'react';
import ReactDOM from 'react-dom';

import App from './../components/App.jsx';
import Patterns from './../components/patterns/Patterns.jsx';

import reducers from './../reducers';

import './../components/bundle.scss';

ReactDOM.render(
  <App>
    <Patterns />
  </App>
  , document.getElementById('react-root'));
