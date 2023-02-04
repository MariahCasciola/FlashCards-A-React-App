import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AddEditCardScreen from "./AddEditCardScreen";
import NotFound from "../NotFound";

function CardRouter() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/new`}>
        <AddEditCardScreen type="Add" />
      </Route>
      <Route path={`${path}/:cardId/edit`}>
        <AddEditCardScreen type="Edit" />
      </Route>

      {/* NotFound view */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default CardRouter;
