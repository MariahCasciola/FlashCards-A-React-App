import React, { useState, useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import StudyScreen from "./Study/StudyScreen";
import DeckScreen from "./DeckScreen";
import CreateEditDeckScreen from "./CreateEditDeckScreen";
import { readDeck } from "../../utils/api";

function DeckRouter() {
  const { path, params } = useRouteMatch();
  const { deckId } = params;
  const [deck, setDeck] = useState({
    id: -1,
    name: "",
    description: "",
    cards: [{ id: "", front: "", back: "" }],
  });

  function loadDeck() {
    readDeck(deckId).then(setDeck);
  }

  useEffect(loadDeck, [deckId]);

  return (
    <Switch>
      {/* Edit Deck Screen */}
      <Route path={`${path}/edit`}>
        <CreateEditDeckScreen type="Edit" deck={deck} />
      </Route>

      {/* StudyScreen view */}
      <Route path={`${path}/study`}>
        <StudyScreen deck={deck} />
      </Route>

      {/* DeckScreen view */}
      <Route path={path}>
        <DeckScreen deck={deck} loadDeck={loadDeck} />
      </Route>
    </Switch>
  );
}

export default DeckRouter;
