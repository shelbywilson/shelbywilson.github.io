import React from 'react';
import ReactDOM from 'react-dom';

import PatternBuilder from './../components/patterns/PatternBuilder.jsx';

import './../components/bundle.scss';

ReactDOM.render(
	<main>
    	<PatternBuilder />
    </main>
  , document.getElementById('react-root'));
