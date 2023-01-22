import React, { useState } from "react";
import Deck from "../Decks/Deck";

function DeckList() {
  //list of decks from the api call this is where we will store it
  const [decks, setDecks] = useState([
    {
      id: 1,
      name: "Rendering in React",
      description:
        "React's component structure allows for quickly building a complex web application that relies on DOM manipulation. ",
    },
    {
      id: 2,
      name: "Rendering in poopy",
      description: "Look I don't make the rules. ",
    },
    {
      id: 3,
      name: "Rendering in BIGpoopy",
      description: "I, oh my god what do I do. ",
    },
  ]);

  return (
    <div>
      {decks.map((deck, index) => (
        <Deck key={index} deck={deck} />
      ))}
    </div>
  );
}

export default DeckList;
