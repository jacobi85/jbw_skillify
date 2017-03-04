/**
 * Created by jacob on 2017-03-02.
 */
import React from 'react';
import jQuery from 'jquery';
import FilterRow from './FilterRow';
import RankingTable from './RankingTable';

class FilterableRankingTable extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            ranks: [],
            filterText: '',
            filterLeague: 'All'
        }
    }

    componentWillMount () {
        this._fetchRanks();
    }

    handleFilterTextChange (value) {
       this.setState({filterText: value});
    }

    handleFilterLeagueChange (value) {
       this.setState({filterLeague: value});
    }

    render () {
        return (
            <div className="ui piled segment">
                <FilterRow
                    filterText={this.state.filterText}
                    filterLeague={this.state.filterLeague}
                    onFilterTextChange={this.handleFilterTextChange.bind(this)}
                    onFilterLeagueChange={this.handleFilterLeagueChange.bind(this)}
                >Filter list</FilterRow>

                <RankingTable
                    ranks={ this.state.ranks }
                    filterText={this.state.filterText}
                    filterLeague={this.state.filterLeague}
                ></RankingTable>
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