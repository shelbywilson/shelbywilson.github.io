import ReactDOM from 'react-dom';
import React from 'react';

import Cones_light from '../pages/sketches/daffodils/experiments/Cones_light';
import Header from '../header/Header';

import '../pages/monolith/_main.scss';

Cones_light();

import './../header/_header.scss';
import './../header/_header-light.scss';

ReactDOM.render(
    <Header url='/#/sketches' />
  , document.getElementById('root'));
