import React from 'react';
import ReactDOM from 'react-dom';

import NewsfeedApp from './../pages/news/NewsfeedApp.jsx';

import './../pages/bundle.scss';

ReactDOM.render(
	<main>
		<NewsfeedApp />
	</main>
  , document.getElementById('react-root'));
