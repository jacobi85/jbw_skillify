/**
 * Created by jacob on 2017-03-02.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory} from 'react-router';

import routes from './routes';

const App = (
    <Router routes={routes} history={hashHistory}/>
)

ReactDOM.render(App, document.getElementById("app"), () => {
    console.timeEnd('React app')
});
