import React from "react";
import { Link } from "react-router-dom";

function StudyButton({ deckId }) {
  return (
    <Link
      to={`/decks/${deckId}/study`}
      className="btn btn-success mr-2"
      title="Study deck"
    >
      <span className="oi oi-book" /> Study
    </Link>
  );
}

export default StudyButton;
