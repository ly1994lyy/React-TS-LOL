import React from "react";
import { Switch,Route } from "react-router-dom"
import { adminRoutes } from "../router/index"
import Frame from "../component/Frame"

class App extends React.Component {
  render() {
    return (
      <Frame>
        <Switch>
            {adminRoutes.map(route=>{
              return <Route key={route.path} path={route.path} exact={route.exact} render={routeProps=>{
                return <route.component {...routeProps} />
              }} />
            })}
        </Switch>
      </Frame>
    );
  }
}

export default App;
