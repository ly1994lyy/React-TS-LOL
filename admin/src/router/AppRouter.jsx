import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import Frame from "../component/Frame/index";
import CreateCategory from "../pages/category/CreateCategory";
import CategoryList from "../pages/category/CategoryList"
import EditCategory from "../pages/category/EditCategory"
import CreateItem from '../pages/item/CreateItem'
import ItemList from '../pages/item/ItemList'
import EditItem from '../pages/item/EditItem'

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <Frame>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/createcategory" component={CreateCategory}></Route>
            <Route path="/editcategory/:id" component={EditCategory}></Route>
            <Route path="/categorylist" component={CategoryList}></Route>
            <Route path="/createitem" component={CreateItem}></Route>
            <Route path="/edititem/:id" component={EditItem}></Route>
            <Route path="/itemlist" component={ItemList}></Route>
            <Route component={PageNotFound}></Route>
          </Switch>
        </Frame>
      </Router>
    );
  }
}

export default AppRouter;
