import React from "react";
import { Link } from "react-router-dom";

function StudyButton({ deckId }) {
  return (
    <Link to={`/decks/${deckId}/study`}>
      <button type="button" className="btn btn-success mr-2 btn-sm">
        <span className="oi oi-book">Study</span>
      </button>
    </Link>
  );
}

export default StudyButton;
