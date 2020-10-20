import React from 'react';
import { Switch, Route} from 'react-router-dom'

import page1 from './page1'
import page2 from './page2'

const Router = ({ match }) => (
    <Switch>
        <Route path={`${match.path}`} exact component={page1}></Route>
        <Route path={`${match.path}/page1`} exact component={page1}></Route>
        <Route path={`${match.path}/page2`} exact component={page2}></Route>
    </Switch>
)

export default Router
