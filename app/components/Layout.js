/**
 * Created by jacob on 2017-03-02.
 */
import React from 'react';
import FilterableRankingTable from './FilterableRankingTable';

class Layout extends React.Component {
    render () {
        return(
            <div className="main ui text padded container">
                <h1 className="ui block centered header">Rankings</h1>
                <FilterableRankingTable />
            </div>
        )
    }
}

export default Layout;