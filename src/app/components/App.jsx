import React, { PropTypes } from 'react';
import Header from './common/Header.jsx';

function App({ children }) {
  return (
    <div>
      <Header />
       {children}
    </div>
  );
}

App.propTypes = { 
	children: PropTypes.object 
};

export default App;
