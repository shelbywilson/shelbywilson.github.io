import React from 'react';
import ReactDOM from 'react-dom';

import PatternApp from './../components/patterns/PatternApp.jsx';

import './../components/bundle.scss';

ReactDOM.render(
	<main>
 	 <PatternApp />
 	</main>
  , document.getElementById('react-root'));
