import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './../components/home/Home.jsx';
import PatternApp from './../components/patterns/PatternApp.jsx';
import PatternBuilder from './../components/patterns/PatternBuilder.jsx';
import NewsfeedApp from './../components/news/NewsfeedApp.jsx';

import './../components/bundle.scss';

ReactDOM.render(
    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/patterns">
          <PatternApp />
        </Route>
        <Route path="/news">
          <NewsfeedApp />
        </Route>
        <Route path="/patterns/builder">
          <PatternBuilder />
        </Route>
      </Switch>
    </BrowserRouter>
, document.getElementById('react-root'));
