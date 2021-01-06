import ReactDOM from 'react-dom';
import React, { Fragment } from 'react';
import Windows from '../pages/windows/Windows';

import './../base/_base.scss';
import '../pages/windows/_windows.scss';

import './../header/_header.scss';
import Header from '../header/Header';

ReactDOM.render(
    <Fragment>
        <Header url='/#/sketches' />
        <Windows />
    </Fragment>
, document.getElementById('root'));