import React from "react";
import { deleteCard } from "../../utils/api";

function DeleteCardButton({ card, loadDeck }) {
  //delete card handler
  function deleteCardHandler(cardId) {
    const confirmed = window.confirm(
      "Delete this card?\n\nYou will not be able to recover it."
    );
    if (confirmed) {
      console.log("deleteCardHandler", confirmed, cardId);
      deleteCard(cardId, new AbortController().signal).then(loadDeck);
    }
  }

  return (
    <button
      onClick={() => deleteCardHandler(card.id)}
      className="btn btn-danger btn-sm"
      title="Delete Card"
    >
      <span className="oi oi-trash" />
    </button>
  );
}

export default DeleteCardButton;
