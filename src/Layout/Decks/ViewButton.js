import React from "react";
import { Link } from "react-router-dom";

function ViewButton({ deckId }) {
  return (
    <Link to={`/decks/${deckId}`}>
      <button type="button" className="btn btn-secondary btn-lg">
        View
      </button>
    </Link>
  );
}

export default ViewButton;
