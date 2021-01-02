import React from 'react';
import ReactDOM from 'react-dom';

import NewsfeedApp from './../components/news/NewsfeedApp.jsx';

import './../components/bundle.scss';

ReactDOM.render(
	<main>
		<NewsfeedApp />
	</main>
  , document.getElementById('react-root'));
