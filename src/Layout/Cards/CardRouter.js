import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AddCardScreen from "./AddCardScreen";
import EditCardScreen from "./EditCardScreen";
import NotFound from "../NotFound";

function CardRouter({ deckName, loadDeck }) {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/new`}>
        <AddCardScreen type="Add" deckName={deckName} loadDeck={loadDeck} />
      </Route>

      <Route path={`${path}/:cardId/edit`}>
        <EditCardScreen type="Edit" deckName={deckName} loadDeck={loadDeck} />
      </Route>

      {/* NotFound view */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default CardRouter;
