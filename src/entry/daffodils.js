import ReactDOM from 'react-dom';
import React from 'react';

import '../pages/monolith/_main.scss';

import './../header/_header.scss';
import './../header/_header-light.scss';
import Header from '../header/Header';
import Daffodils from '../pages/sketches/daffodils/Daffodils';

Daffodils();

ReactDOM.render(
    <Header url='/#/sketches' />
  , document.getElementById('root'));
