import ReactDOM from 'react-dom';
import React, { Fragment } from 'react';

import './../base/_base.scss';
import './../pages/cloud-town/_cloud-town.scss';

import CloudTown from './../pages/cloud-town/CloudTown';

import './../header/_header.scss';
import Header from '../header/Header';

ReactDOM.render(
    <Fragment>
      <Header url='/#/cloud-town' />
      <CloudTown />
    </Fragment> 
  , document.getElementById('root'));