import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { updateCard, readCard, createCard } from "../../utils/api";
import BreadCrumb from "../BreadCrumb";
import CardForm from "./CardForm";

function AddEditCardScreen({ type, deckName, loadDeck }) {
  const { deckId, cardId } = useParams();
  const history = useHistory();
  const [card, setCard] = useState({ front: "", back: "" });

  // run useEffect to read both the deck and cards
  useEffect(() => {
    if (cardId) {
      readCard(cardId).then(setCard);
    }
  }, [deckId, cardId]);

  // submit helper for update cards
  async function updateCardHelper(updatedCard) {
    updateCard(updatedCard, new AbortController().signal)
      // must reload deck in order for updated cards to show on deckScreen
      .then(loadDeck)
      .then(goToDeckScreen);
  }

  // submit helper for add cards
  async function createCardHelper(addedCard) {
    //You got this
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

  // we only want to load for Edit type
  const editCardDisplay = card.id ? (
    <CardForm
      submitHelper={updateCardHelper}
      onCancel={goToDeckScreen}
      deckName={deckName}
      initialFormState={card}
      headerLabel={type}
      submitLabel="Submit"
      cancelLabel="Cancel"
    />
  ) : (
    <p>Loading...... </p>
  );

  return (
    <>
      {/* cards breadcrumb */}
      <BreadCrumb />
      <h3>{type} Card</h3>
      {type === "Add" ? addCardDisplay : editCardDisplay}
    </>
  );
}

export default AddEditCardScreen;
