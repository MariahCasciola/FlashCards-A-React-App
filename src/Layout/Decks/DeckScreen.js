import React from "react";
import { Link } from "react-router-dom";
import CardList from "../Cards/CardList";
import StudyButton from "./StudyButton";
import DeleteDeckButton from "./DeleteDeckButton";

function DeckScreen({ deck, loadDeck }) {
  return (
    <main className="container deck-view">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home" /> Home
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {deck.name}
          </li>
        </ol>
      </nav>
      <div className="media mb-2">
        <div className="media-body">
          <h5 className="mt-0">{deck.name}</h5>
          {deck.description}
        </div>
      </div>
      <Link
        to={`/decks/${deck.id}/edit`}
        className="btn btn-secondary mr-2"
        title="Edit deck"
      >
        <span className="oi oi-pencil" /> Edit
      </Link>
      <StudyButton deckId={deck.id} />
      <Link
        to={`/decks/${deck.id}/cards/new`}
        className="btn btn-primary"
        title="Add Card"
      >
        <span className="oi oi-plus" /> Add Cards
      </Link>
      <DeleteDeckButton deckId={deck.id} />
      {/* <button className="btn btn-danger float-right" title="Delete deck">
        <span className="oi oi-trash" onClick={handleDelete} />
      </button> */}
      <CardList deck={deck} loadDeck={loadDeck} />
    </main>
  );
}

export default DeckScreen;
