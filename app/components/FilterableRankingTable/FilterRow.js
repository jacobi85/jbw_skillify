/**
 * Created by jacob on 2017-03-02.
 */

import React from 'react';

export default class FilterRow extends React.Component {

    constructor (props) {
        super(props);
    }

    _handleSearchBoxInputChange (e) {
        this.props.onFilterTextChange(e.target.value);
    }

    _handleSelectBoxFilterChange (e) {
        this.props.onFilterLeagueChange(this.refs.filterLeague[this.refs.filterLeague.selectedIndex].value);
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
                                       placeholder={this.props.children}
                                       value={this.props.filterText}
                                       ref="filterText"
                                       onChange={(e) => this._handleSearchBoxInputChange(e)}
                                />
                                <i className="search icon"></i>
                            </div>
                        </div>
                        <div className="field">
                            <select className="ui fluid search dropdown"
                                    ref="filterLeague"
                                    value={this.props.filterLeague}
                                    onChange={(e) => this._handleSelectBoxFilterChange(e)}>
                                { leagueOptions.map(league => {
                                    { var index = leagueOptions.indexOf(league) }
                                    return <option
                                        value={league}
                                        key={index}>{league}</option>
                                }) }
                            </select>
                        </div>
                    </div>
                </form>
            </aside>
        );
    }
}


