import React, { useEffect } from "react";
import { readDeck } from "../../../utils/api";
import { useState } from "react";
import { useParams } from "react-router-dom";
import StudyCard from "./StudyCard";

function StudyDeck() {
  //get deckId from the url
  const { deckId } = useParams();
  const [deck, setDeck] = useState({});

  //call readDeck, so we can get the deck object
  useEffect(() => {
    readDeck(deckId).then(setDeck);
  }, [deckId]);

  return (
    <div>
      <h1>Study: {deck.name}</h1>
      <StudyCard cards={deck.cards} />
    </div>
  );
}

export default StudyDeck;
