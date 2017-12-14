import React, { PropTypes } from 'react';
import Header from './common/Header.jsx';

function App({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
      	{children}
      </div>
    </div>
  );
}

App.propTypes = { children: PropTypes.object };

export default App;
