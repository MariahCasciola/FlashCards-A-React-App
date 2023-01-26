import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../../utils/api";

function DeckScreen() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState({});

  useEffect(() => {
    //make api call from readDeck() using .then()
    const abortController = new AbortController();
    //the parameter of a callback takes whatever the previous resolved promise returns .then((deck)=>{setDeck}) is the same as .then(setDeck)
    readDeck(deckId, abortController.signal).then((deck) => {
      setDeck(deck);
    });
    return () => {
      //cancels pending requests or response
      abortController.abort();
    };
  }, []);

  return (
    <div>
      <nav></nav>
      <h3>{deck.name}</h3>
      <p>{deck.description}</p>
      {/* 
      these should all be renamed:
<EditButton/>
<StudyButtonEdit/>
<AddCardsButton/> 
<DeleteDeckButton/> 
<CardList/>
*/}
    </div>
  );
}

export default DeckScreen;
