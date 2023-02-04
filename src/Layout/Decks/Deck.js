import React from "react";
import DeleteDeckButton from "./DeleteDeckButton";
import StudyButton from "./StudyButton";
import ViewButton from "./ViewButton";

function Deck({ deck = {}, loadDeckList }) {
  const { id = "", name = "", description = "" } = deck;
  return !deck ? null : (
    <div>
      {/* we are rendering a deck */}
      <h3>{name} </h3>
      <p> {description} </p>
      <ViewButton deckId={id} />
      <StudyButton deckId={id} />
      <DeleteDeckButton deckId={id} loadDeckList={loadDeckList} />
    </div>
  );
}
export default Deck;
