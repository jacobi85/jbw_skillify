/**
 * Created by jacob on 2017-03-02.
 */

import React from 'react';

export default class FilterRow extends React.Component {

    constructor(props) {
        super(props);

        this._handleSearchBoxInputChange = this._handleSearchBoxInputChange.bind(this);
        this._handleSelectBoxFilterChange = this._handleSelectBoxFilterChange.bind(this);
    }

    _handleSearchBoxInputChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    _handleSelectBoxFilterChange() {
        this.props.onFilterLeagueChange(this.refs.filterLeague[this.refs.filterLeague.selectedIndex].value);
    }

    render() {

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
                                       onChange={this._handleSearchBoxInputChange}
                                />
                                <i className="search icon"> </i>
                            </div>
                        </div>
                        <div className="field">
                            <select className="ui fluid search dropdown"
                                    ref="filterLeague"
                                    value={this.props.filterLeague}
                                    onChange={this._handleSelectBoxFilterChange}>
                                { leagueOptions.map(league => {
                                    {
                                        var index = leagueOptions.indexOf(league);
                                    }
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


