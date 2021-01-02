import React from 'react';
import ReactDOM from 'react-dom';

import PatternApp from './../pages/patterns/PatternApp.jsx';

import './../pages/bundle.scss';

ReactDOM.render(
	<main>
 	 <PatternApp />
 	</main>
  , document.getElementById('react-root'));
