import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StoriesScreen from "./StoriesScreen.js";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={StoriesScreen} />
      </Switch>
    </Router>
  );
}
export default AppRouter;
