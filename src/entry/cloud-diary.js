import ReactDOM from 'react-dom';
import React, { Fragment } from 'react';

import './../pages/cloud-town/partials/_cloud-diary.scss';
import CloudDiary from './../pages/cloud-town/CloudDiary';

import './../pages/home/partials/_header.scss';
import Header from '../pages/home/Header';

ReactDOM.render(
  <Fragment>
    <Header url='/#/cloud-town'/>
    <CloudDiary />
  </Fragment>
  , document.getElementById('root'));