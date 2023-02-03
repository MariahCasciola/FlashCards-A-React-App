import React from "react";
import StudyCard from "./StudyCard";

function StudyDeck({ deck }) {
  return (
    <div>
      <h1>Study: {deck.name}</h1>
      <StudyCard cards={deck.cards} />
    </div>
  );
}

export default StudyDeck;
