import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readCard, createCard } from "../../utils/api";
import BreadCrumb from "../BreadCrumb";
import CardForm from "./CardForm";

function AddCardScreen({ type, deckName, loadDeck }) {
  const { deckId, cardId } = useParams();
  const history = useHistory();
  const [card, setCard] = useState({ front: "", back: "" });

  // run useEffect to read both the deck and cards
  useEffect(() => {
    if (cardId) {
      readCard(cardId).then(setCard);
    }
  }, [deckId, cardId]);

  // submit helper for add cards
  async function createCardHelper(addedCard) {
    createCard(deckId, addedCard, new AbortController().signal)
      // must reload deck in order for the new cards to show on deckScreen
      .then(loadDeck);
  }

  // cancel and done handler
  function goToDeckScreen() {
    history.push(`/decks/${deckId}`);
  }

  // pass in the card form
  const addCardDisplay = (
    <CardForm
      submitHelper={createCardHelper}
      onCancel={goToDeckScreen}
      deckName={deckName}
      initialFormState={card}
      headerLabel={type}
      submitLabel="Save"
      cancelLabel="Done"
    />
  );
  
  return (
    // Add Card
    <div>
      <BreadCrumb
        link={deckName}
        title={`${type} Card`}
        href={`/decks/${deckId}`}
      />
      <h3 className="blockquote" >
        {deckName}: {type} Card
      </h3>
      {addCardDisplay}
    </div>
  );
}

export default AddCardScreen;
