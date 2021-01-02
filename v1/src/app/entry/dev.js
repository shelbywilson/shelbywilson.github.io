import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './../pages/home/Home.jsx';
import PatternApp from './../pages/patterns/PatternApp.jsx';
import PatternBuilder from './../pages/patterns/PatternBuilder.jsx';
import NewsfeedApp from './../pages/news/NewsfeedApp.jsx';

import './../pages/bundle.scss';

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
        <Route path="/v1/patterns/builder">
          <PatternBuilder />
        </Route>
      </Switch>
    </BrowserRouter>
, document.getElementById('react-root'));
