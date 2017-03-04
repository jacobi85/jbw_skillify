/**
 * Created by jacob on 2017-03-02.
 */
import React from 'react';
import jQuery from 'jquery';
import FilterRow from './FilterRow';
import RankingTable from './RankingTable';

class FilterableRankingTable extends React.Component {

    constructor () {
        super();

        this.state = {
            ranks: [],
            filterText: '',
            filterLeague: ''
        }
    }

    componentWillMount () {
        this._fetchRanks();
    }

    render () {
        return (
            <div className="ui piled segment">
                <FilterRow>Filter list</FilterRow>
                <RankingTable ranks={ this.state.ranks } ></RankingTable>
            </div>
        );
    }

    _fetchRanks() {
        jQuery.ajax({
            method: 'GET',
            url: 'app/ranks.json',
            success: (ranks) => {
                this.setState({
                    ranks: ranks
                });
            }
        });
    }
}

export default FilterableRankingTable;