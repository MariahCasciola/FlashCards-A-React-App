import React, { useState, useEffect } from "react";
import CardForm from "./CardForm";
import BreadCrumb from "../BreadCrumb";
import { updateCard, readCard } from "../../utils/api";
import { useParams, useHistory} from "react-router-dom";

function EditCardScreen({ type, deckName, loadDeck }) {
  const { deckId, cardId } = useParams();
  const history = useHistory();
  // does this need a card id?
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

  // cancel and done handler
  function goToDeckScreen() {
    history.push(`/decks/${deckId}`);
  }
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
    <div>
      <BreadCrumb
        link={deckName}
        title={`${type} Card ${cardId}`}
        href={`/decks/${deckId}`}
      />
      <h3 className="blockquote" >{type} Card</h3>
      {editCardDisplay}
    </div>
  );
}

export default EditCardScreen;
