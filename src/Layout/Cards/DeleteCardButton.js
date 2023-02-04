import React from "react";
import { deleteCard } from "../../utils/api";


function DeleteCardButton({card, loadDeck}) {

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

  return (
    <button className="btn btn-danger" title="Delete Card">
      <span
        className="oi oi-trash"
        onClick={() => deleteCardHandler(card.id)}
      />
    </button>
  );
}

export default DeleteCardButton;
