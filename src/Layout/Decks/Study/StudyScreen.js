import React from "react";
import BreadCrumb from "../../BreadCrumb";
import StudyDeck from "./StudyDeck";

function StudyScreen({ deck }) {
  return (
    <div>
      <BreadCrumb link={deck.name} title="Study" href={`/decks/${deck.id}`} />
      <StudyDeck deck={deck} />
    </div>
  );
}

export default StudyScreen;
