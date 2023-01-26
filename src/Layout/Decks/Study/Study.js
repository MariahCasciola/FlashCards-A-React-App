import React from "react";
import BreadCrumb from "./BreadCrumb";
import { Route} from "react-router-dom";
import StudyDeck from "./StudyDeck";

function Study() {
  return (
    <div>
      <Route path={`/decks/:deckId/study`}>
        <BreadCrumb />
        <h2> Deck Title </h2>
        <StudyDeck />
      </Route>
    </div>
  );
}

export default Study;
