import React from 'react';
import ReactDOM from 'react-dom';

import App from './../components/App.jsx';
import Newsfeed from './../components/news/Newsfeed.jsx';

import reducers from './../reducers';

import './../components/bundle.scss';

ReactDOM.render(
  <App>
    <Newsfeed />
  </App>
  , document.getElementById('react-root'));
