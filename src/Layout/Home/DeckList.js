import React, { useEffect, useState } from "react";
import { listDecks } from "../../utils/api";
import Deck from "../Decks/Deck";

function DeckList() {
  //list of decks from the api call this is where we will store it
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    listDecks(abortController.signal).then(setDecks);
    return () => {
      // Cancels any pending request or response
      abortController.abort();
    };
  }, []);
// console.log(decks)
  return (
    <div>
      {decks.map((deck, index) => (
        <Deck key={index} deck={deck} />
      ))}
    </div>
  );
}

export default DeckList;
