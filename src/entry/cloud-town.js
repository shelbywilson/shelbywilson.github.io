import ReactDOM from 'react-dom';
import React, { Fragment } from 'react';

import './../base/_base.scss';
import './../pages/cloud-town/_cloud-town.scss';

import './../header/_header.scss';
import Header from '../header/Header';
import CloudTown from '../pages/cloud-town/CloudTown';

ReactDOM.render(
    <Fragment>
      <Header url='/#/cloud-town' />
      <CloudTown />
    </Fragment> 
  , document.getElementById('root'));