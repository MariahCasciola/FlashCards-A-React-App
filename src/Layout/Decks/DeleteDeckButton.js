import React from "react";
import { useHistory } from "react-router-dom";
import { deleteDeck } from "../../utils/api";

function DeleteDeckButton({ deckId, loadDeckList }) {
  const history = useHistory();
  const handleDelete = async () => {
    const confirm = window.confirm(
      "Delete this deck?\n\nYou will not be able to recover it."
    );
    if (confirm) {
      await deleteDeck(deckId);
      //condition below allows us to use one component for two buttons that delete decks on two different pages
      if (loadDeckList) {
        await loadDeckList();
      }
      history.push("/");
    }
  };
  return (
    <button
      type="button"
      onClick={handleDelete}
      className="btn btn-danger btn-sm"
    >
      <span className="oi oi-trash"></span>
    </button>
  );
}

export default DeleteDeckButton;
