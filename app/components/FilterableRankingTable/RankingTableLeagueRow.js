/**
 * Created by jacob on 2017-03-02.
 */

import React from 'react';

const RankingTableLeagueRow = props =>
    <tr><td colSpan="3" className={`category-row ${props.children}`}><strong>{` ${props.children} league `}</strong></td></tr>;

export default RankingTableLeagueRow;
