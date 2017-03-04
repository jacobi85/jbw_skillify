/**
 * Created by jacob on 2017-03-02.
 */

import React from 'react';
import RankingTableLeagueRow from './RankingTableLeagueRow';
import Row from './RankingTableRow';

export default class RankingTable extends React.Component {

    constructor () {
        super();
    }

    render () {
        let rows = [];
        let lastCategory = null;
        var filterText = this.props.filterText;
        var filterLeague = this.props.filterLeague;
        this.props.ranks.forEach(function(rank) {
            let compareLettersForFiltering = rank.name.toUpperCase().indexOf(filterText.toUpperCase()) === -1;
            let filterRanksOnCategory = rank.league.toUpperCase().indexOf(filterLeague.toUpperCase()) === -1 && filterLeague !== 'All';

            if (compareLettersForFiltering || filterRanksOnCategory) {
                return;
            }

                if (lastCategory !== rank.league) {
                    rows.push(<RankingTableLeagueRow key={rank.league}>{rank.league}</RankingTableLeagueRow>);
                }
                rows.push(<Row key={ rank.id } { ...rank }></Row>)
                lastCategory = rank.league;

        });

        return (
                <table className="ui compact table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Rank</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>

                        {rows}
                      

                    </tbody>
                </table>
        );
    }
}