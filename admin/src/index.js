import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router,Route,Switch,Redirect } from "react-router-dom"
import {mainRoutes} from "./router/index"
import App from "./component/App"
import './static/css/common.less'

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/admin" render={routeProps=><App {...routeProps} />} />
            {mainRoutes.map(route=>{
                return <Route key={route.path} {...route} />
            })}
            <Redirect to="/404" />
        </Switch>
    </Router>
, document.getElementById('root'));

