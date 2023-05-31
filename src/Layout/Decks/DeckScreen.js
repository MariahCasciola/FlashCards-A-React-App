import React from "react";
import { Link } from "react-router-dom";
import CardList from "../Cards/CardList";
import StudyButton from "./StudyButton";
import DeleteDeckButton from "./DeleteDeckButton";
import BreadCrumb from "../BreadCrumb";

function DeckScreen({ deck, loadDeck, promiseInProgress }) {
  // console.log(promiseInProgress);

  return (
    <main className="container deck-view">
      <BreadCrumb title={deck.name} />
      <div className="media mb-2">
        <div className="media-body">
          <h5 className="mt-0">{deck.name}</h5>
          {deck.description}
        </div>
      </div>
      <Link
        to={`/decks/${deck.id}/edit`}
        className="btn btn-secondary mr-2 btn-sm"
        title="Edit deck"
      >
        <span className="oi oi-pencil" /> Edit
      </Link>
      <StudyButton deckId={deck.id} />
      <Link
        to={`/decks/${deck.id}/cards/new`}
        className="btn btn-primary mr-2 btn-sm"
        title="Add Card"
      >
        <span className="oi oi-plus" /> Add Cards
      </Link>

      <DeleteDeckButton deckId={deck.id} />

      <CardList
        deck={deck}
        loadDeck={loadDeck}
        promiseInProgress={promiseInProgress}
      />
    </main>
  );
}

export default DeckScreen;
