import React from "react";
import { Link } from "react-router-dom";

function CreateDeck() {    
  return (
    <div>
      <nav>Home/CreateDeck</nav>
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

export default CreateDeck;
