import React from "react";
import { Link } from "react-router-dom";

function ViewButton({ deckId }) {
  return (
    <Link to={`/decks/${deckId}`}>
      <button type="button" className="btn btn-primary mr-2 btn-sm">
        <span className="oi oi-eye">View</span>
      </button>
    </Link>
  );
}

export default ViewButton;
