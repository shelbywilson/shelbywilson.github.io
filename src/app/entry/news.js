import React from 'react';
import ReactDOM from 'react-dom';

import NewsfeedApp from './../components/news/NewsfeedApp.jsx';

import './../components/bundle.scss';

ReactDOM.render(
	<NewsfeedApp />
  , document.getElementById('react-root'));
