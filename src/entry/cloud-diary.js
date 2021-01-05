import ReactDOM from 'react-dom';
import React, { Fragment } from 'react';

import './../pages/cloud-town/partials/_cloud-town.scss';
import './../pages/cloud-town/partials/_cloud-diary.scss';
import CloudDiary from './../pages/cloud-town/CloudDiary';

import './../header/_header.scss';
import Header from '../header/Header';

ReactDOM.render(
  <Fragment>
    <Header url='/#/cloud-town'/>
    <CloudDiary />
  </Fragment>
  , document.getElementById('root'));