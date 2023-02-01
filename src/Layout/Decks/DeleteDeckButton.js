import React from "react";
import { useHistory } from "react-router-dom";
import { deleteDeck } from "../../utils/api";


function DeleteDeckButton({deckId}) {
  const history = useHistory();

  const handleDelete = () => {
    const confirm = window.confirm(
      "Delete this deck?\n\nYou will not be able to recover it."
    );
    if (confirm) {
      deleteDeck(deckId).then(() => history.push("/"));
    }
  };
  return (
    <button
      type="button"
      onClick={handleDelete}
      className="btn btn-danger float-right"
    >
      Delete
    </button>
  );
}

export default DeleteDeckButton;
