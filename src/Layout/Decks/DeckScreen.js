import React from "react";
import { useParams, Link } from "react-router-dom";
import { deleteCard, readDeck } from "../../utils/api";
import { useEffect, useState } from "react";
import CardList from "../Cards/CardList";
import StudyButton from "./StudyButton";
import DeleteDeckButton from "./DeleteDeckButton";

function DeckScreen() {
  // const history = useHistory();
//   const { path } = useRouteMatch();
  const { deckId } = useParams();
  const [deck, setDeck] = useState({ cards: [] });

  function loadDeck() {
    readDeck(deckId).then(setDeck);
  }

  // delete deck handler
  // function handleDelete() {
  //   const confirmed = window.confirm(
  //     "Delete this deck?\n\nYou will not be able to recover it."
  //   );
  //   if (confirmed) {
  //     deleteDeck(deck.id).then(() => history.push("/decks"));
  //   }
  // }

  //delete card handler
  function deleteCardHandler(cardId) {
    const confirmed = window.confirm(
      "Delete this card?\n\nYou will not be able to recover it."
    );
    if (confirmed) {
      console.log("deleteCardHandler", confirmed, cardId);
      deleteCard(cardId).then(loadDeck);
    }
  }

  // useEffect(() => {
  //   //make api call from readDeck() using .then()
  //   const abortController = new AbortController();
  //   //the parameter of a callback takes whatever the previous resolved promise returns .then((deck)=>{setDeck}) is the same as .then(setDeck)
  //   readDeck(deckId, abortController.signal).then((deck) => {
  //     setDeck(deck);
  //   });
  //   return () => {
  //     //cancels pending requests or response
  //     abortController.abort();
  //   };
  // }, [deckId]);

  //the code below is cleaner and doesn't have an abort contoller, trade for the code about if you need to add an abort controller

  useEffect(loadDeck, [deckId]);

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
        to={`/decks/${deckId}/edit`}
        className="btn btn-secondary mr-2"
        title="Edit deck"
      >
        <span className="oi oi-pencil" /> Edit
      </Link>
      <StudyButton deckId={deckId} />
      <Link
        to={`/decks/${deckId}/cards/new`}
        className="btn btn-primary"
        title="Add Card"
      >
        <span className="oi oi-plus" /> Add Cards
      </Link>
      <DeleteDeckButton deckId={deckId}/>
      {/* <button className="btn btn-danger float-right" title="Delete deck">
        <span className="oi oi-trash" onClick={handleDelete} />
      </button> */}
      <CardList deck={deck} onCardDelete={deleteCardHandler} />
    </main>
  );
}

export default DeckScreen;
