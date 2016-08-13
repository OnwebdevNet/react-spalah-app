'use strict';

import React                       from 'react';
import {Router, Route}             from 'react-router';
import CreateBrowserHistory        from 'history/lib/createBrowserHistory';

import App                         from './App';

export default (
    <Router history={CreateBrowserHistory()}>
        <Route path="/" component={App}/>
    </Router>
);
