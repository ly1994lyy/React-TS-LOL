import React from 'react'
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import Home from '../pages/Home'

class Routes extends React.Component {
    render() {
        return(
            <Router>
                <Switch>
                    <Route path='/' component={Home}></Route>
                </Switch>
            </Router>
        )
    }
}

export default Routes