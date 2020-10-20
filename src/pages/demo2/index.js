import React from 'react';
import { Switch, Route} from 'react-router-dom'

import Page1 from './page1'
import Page2 from './page2'

const Router = ({ match }) => (
    <Switch>
        <Route path={`${match.path}`} exact component={Page1}></Route>
        <Route path={`${match.path}/page1`} exact component={Page1}></Route>
        <Route path={`${match.path}/page1`} exact component={Page2}></Route>
    </Switch>
)
export default Router
