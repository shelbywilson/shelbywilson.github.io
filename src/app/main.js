import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App.jsx';
import About from './components/about/About.jsx';
import Home from './components/home/Home.jsx';
import Patterns from './components/patterns/Patterns.jsx';
import Newsfeed from './components/news/Newsfeed.jsx';

import reducers from './reducers';

import './components/bundle.scss';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />;
      </Route>
      <Route path="/patterns" component={App}>
        <IndexRoute component={Patterns} />;
      </Route>
      <Route path="/news" component={App}>
        <IndexRoute component={Newsfeed} />;
      </Route>
      <Route path="/about" component={App}>
        <IndexRoute component={About} />;
      </Route>
    </Router>
  </Provider>
  , document.getElementById('react-root'));
