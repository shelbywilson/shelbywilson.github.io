import React from 'react';
import ReactDOM from 'react-dom';

import PatternBuilder from './../pages/patterns/PatternBuilder.jsx';

import './../pages/bundle.scss';

ReactDOM.render(
	<main>
    	<PatternBuilder />
    </main>
  , document.getElementById('react-root'));
