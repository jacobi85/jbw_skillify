/**
 * Created by jacob on 2017-03-02.
 */

import React from 'react';

const Row = props =>
    <tr>
        <td>{ props.id }</td>
        <td>{ props.name }</td>
        <td>{ `${props.minScore} - ${props.maxScore}` }</td>
    </tr>;

export default Row;
