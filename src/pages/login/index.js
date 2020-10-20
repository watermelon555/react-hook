import React from 'react';
import { Switch, Route} from 'react-router-dom'

import Login from './login'

const Router = ({ match }) => (
    <Switch>
        <Route path={`${match.path}`} exact component={Login}></Route>
        <Route path={`${match.path}/login`} exact component={Login}></Route>
    </Switch>
)
export default Router
