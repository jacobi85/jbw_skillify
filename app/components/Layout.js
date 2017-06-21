/**
 * Created by jacob on 2017-03-02.
 */
import React from 'react';
import {Link} from 'react-router';

const Layout = props =>
    <div className="main ui text padded container">
        <header className="ui block centered header">

            <div className="ui horizontal bulleted list">
                <Link className="item" to="/ranks">
                    Ranks
                </Link>
            </div>

        </header>
        <section className="ui piled segment">
            {props.children}
        </section>
    </div>;

export default Layout;