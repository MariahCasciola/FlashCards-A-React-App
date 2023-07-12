import React from "react";
import DeleteDeckButton from "./DeleteDeckButton";
import StudyButton from "./StudyButton";
import ViewButton from "./ViewButton";

function Deck({ deck = {}, loadDeckList }) {
  const { id = "", name = "", description = "" } = deck;
  return !deck ? null : (
    <>
      <div className="card border-primary mb-3">
        <div className="card-header bg-primary text-white">
          <h3 className="blockquote card-title mt-2">{name} </h3>
        </div>
        <div className="card-body">
          {/* we are rendering a deck */}
          <ViewButton deckId={id} />
          <StudyButton deckId={id} />
          <DeleteDeckButton deckId={id} loadDeckList={loadDeckList} /> {"\n"}
          <p className="badge bg-primary text-wrap text-white ml-1">
            {deck.cards.length} cards
          </p>
          <p className="card-text"> {description} </p>
        </div>
      </div>
    </>
  );
}
export default Deck;
