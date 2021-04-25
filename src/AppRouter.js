import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import StoriesScreen from "./StoriesScreen.js";
import CommentsScreen from "./CommentsScreen.js";

function AppRouter() {
  let match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.url}/`} component={StoriesScreen} />
      <Route path="/comments" component={CommentsScreen} />
    </Switch>
  );
}
export default AppRouter;
