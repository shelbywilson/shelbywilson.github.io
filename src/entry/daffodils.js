import ReactDOM from 'react-dom';
import React from 'react';

import '../pages/monolith/_main.scss';

import './../header/_header.scss';
import './../header/_header-light.scss';
import Header from '../header/Header';
import Daffodils from '../pages/sketches/daffodils/Daffodils';
import '../pages/sketches/daffodils/scss/daffodils.scss';

Daffodils();

ReactDOM.render(
    <Header url='/#/daffodils' />
  , document.getElementById('root'));
