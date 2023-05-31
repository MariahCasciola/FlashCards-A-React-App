import React, { useEffect, useState } from "react";
import { listDecks } from "../../utils/api";
import Deck from "../Decks/Deck";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";

function DeckList() {
  //list of decks from the api call this is where we will store it
  const [decks, setDecks] = useState([]);
  const { promiseInProgress } = usePromiseTracker();

  const loadDeckList = () => {
    const abortController = new AbortController();
    trackPromise(listDecks(abortController.signal).then(setDecks));
    return () => {
      // Cancels any pending request or response
      abortController.abort();
    };
  };

  useEffect(loadDeckList, []);
  // console.log(decks)
  return promiseInProgress === true ? (
    <div className="text-center">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden"></span>
      </div>
    </div>
  ) : (
    <div>
      {decks.map((deck, index) => (
        <Deck
          key={index}
          deck={deck}
          loadDeckList={loadDeckList}
          promiseInProgress={promiseInProgress}
        />
      ))}
    </div>
  );
}

export default DeckList;
