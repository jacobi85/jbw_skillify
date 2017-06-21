/**
 * Created by jacob on 2017-03-04.
 */
import React from 'react';
import { Route, Redirect, IndexRoute} from 'react-router';
import c from './components';

const routes  =
    <Route path="/" component={c.Layout}>
        <Redirect from="/" to="/ranks" />
        <IndexRoute component={c.FilterableRankingTable} />
        <Route path="ranks" component={c.FilterableRankingTable}></Route>
    </Route>

export default routes;