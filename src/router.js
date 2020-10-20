import React from 'react';
import {Switch, Route} from 'react-router-dom'

// 一级菜单
import demo1 from './pages/demo1'
import demo2 from './pages/demo2'
import login from './pages/login'
import {BaseLayout} from "./layout/BaseLayout";

export const RouterChild = (
    <Route render={(props) => (
        <BaseLayout {...props}>
            <Switch>
                {/*<Route path='/' component={demo1}></Route>*/}
                <Route path='/demo1' component={demo1}/>
                <Route path='/demo2' component={demo2}/>
                <Route path='/login' component={login}/>
            </Switch>
        </BaseLayout>


    )
    }/>
)
