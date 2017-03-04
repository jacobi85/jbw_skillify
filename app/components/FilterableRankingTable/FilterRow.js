/**
 * Created by jacob on 2017-03-02.
 */

import React from 'react';

export default class FilterRow extends React.Component {

    constructor () {
        super();
    }

    render () {

        const leagueOptions = ['All', 'Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond'];

        return (
            <aside>
                <form className="ui form">
                    <div className="two fields">
                        <div className="ui category search field">
                            <div className="ui icon input">
                                <input className="prompt"
                                       type="text"
                                       placeholder={this.props.children} />
                                <i className="search icon"></i>
                            </div>
                            <div className="results"></div>
                        </div>
                        <div className="field">
                            <select className="ui fluid search dropdown" name="card[expire-month]">
                                { leagueOptions.map(league => {
                                    { var index = leagueOptions.indexOf(league) }
                                    return <option value={index} key={index}>{league}</option>
                                }) }
                            </select>
                        </div>
                    </div>
                </form>
            </aside>
        );
    }
}


