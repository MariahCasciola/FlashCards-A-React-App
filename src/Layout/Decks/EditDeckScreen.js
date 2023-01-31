import React from "react";

function EditDeckScreen() {
  return (
    <div>
      <nav>Home/Deck title/ Edit Deck</nav>
      <h1>Create Deck</h1>
      <form>
        <label>Name</label>
        <input typeof="text"></input>
        <label>Description</label>
        <textarea typeof="text"></textarea>
      </form>
      <Link to="/">
        <button>Cancel</button>
      </Link>
      <Link to="/decks/:deckId">
        <button>Submit</button>
      </Link>
    </div>
  );
}

export default EditDeckScreen;
