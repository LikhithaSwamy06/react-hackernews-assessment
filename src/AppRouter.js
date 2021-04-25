import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StoriesScreen from "./StoriesScreen.js";
import CommentsScreen from "./CommentsScreen.js";

function AppRouter(props) {
  console.log(props);
  return (
    <Router>
      <Switch>
        <Route path="/" component={StoriesScreen} />
        <Route path="/comments" component={CommentsScreen} />
      </Switch>
    </Router>
  );
}
export default AppRouter;
