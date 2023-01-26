import React from "react";
import { Link, useParams } from "react-router-dom";

function StudyButton() {
  return (
    <Link to="/decks/:deckId/study">
      <button type="button" className="btn btn-primary btn-lg">
        Study
      </button>
    </Link>
  );
}

export default StudyButton;
