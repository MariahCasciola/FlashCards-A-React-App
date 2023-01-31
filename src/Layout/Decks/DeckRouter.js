import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import StudyScreen from "./Study/StudyScreen";
import DeckScreen from "./DeckScreen";

function DeckRouter() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      {/* StudyScreen view */}
      <Route path={`${path}/study`}>
        <StudyScreen />
      </Route>

      {/* DeckScreen view */}
      <Route path={path}>
        <DeckScreen />
      </Route>
    </Switch>
  );
}

export default DeckRouter;
