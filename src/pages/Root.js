import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import PagesIndexSearch from './Index/Search/Search';

const Root = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={PagesIndexSearch} />
            </Switch>
        </Router>
    );
};

export default Root;