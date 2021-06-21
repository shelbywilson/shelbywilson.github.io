import ReactDOM from 'react-dom';
import React from 'react';

import Cones from '../pages/sketches/daffodils/experiments/Cones';
import Header from '../header/Header';

import '../pages/monolith/_main.scss';

Cones();

import './../header/_header.scss';
import './../header/_header-light.scss';

ReactDOM.render(
    <Header url='/#/sketches' />
  , document.getElementById('root'));
