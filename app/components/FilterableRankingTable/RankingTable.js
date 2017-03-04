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
        let currentLeague = null;
        this.props.ranks.forEach(function(rank) {

            if (currentLeague !== rank.league) {
                currentLeague = rank.league;
                rows.push(<RankingTableLeagueRow key={currentLeague}>{currentLeague}</RankingTableLeagueRow>);
            }
            rows.push(<Row key={ rank.id } { ...rank }></Row>)
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