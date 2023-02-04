import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import DeckRouter from "./DeckRouter";
import CreateEditDeckScreen from "./CreateEditDeckScreen";
import NotFound from "../NotFound";

function Decks() {
  const { path } = useRouteMatch();

  return (
    <Switch>
      {/* CreateDeckScreen view */}
      <Route path={`${path}/new`}>
        <CreateEditDeckScreen type="Create" />
      </Route>

      {/* DeckScreen view */}
      <Route path={`${path}/:deckId`}>
        <DeckRouter />
      </Route>

      {/* NotFound view */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Decks;
