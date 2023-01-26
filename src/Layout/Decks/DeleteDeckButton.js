import React from "react";

function DeleteDeckButton() {
  const deleteMessage = ()=> {
    window.confirm("Delete this deck? You will not be able to recover it.")}
  return (
    <button type="button" onClick={deleteMessage} className="btn btn-danger btn-lg">
      Delete
    </button>
  );
}

export default DeleteDeckButton;
