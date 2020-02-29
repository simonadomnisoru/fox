import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "style/App.css";
import Posts from "./Posts";
import Create from "./Create";
import Edit from "./Edit";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/edit/:id">
          <Edit />
        </Route>
        <Route path="/">
          <Posts />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
