import ReactDOM from 'react-dom';
import React from 'react';

import '../pages/monolith/_main.scss';

import Monolith from '../pages/monolith/Monolith';

import './../header/_header.scss';
import './../header/_header-light.scss';
import Header from '../header/Header';

Monolith();

ReactDOM.render(
    <Header url='/#/sketches' />
  , document.getElementById('root'));
