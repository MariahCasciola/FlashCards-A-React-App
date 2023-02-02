import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function StudyCard({ cards = [{ id: "", front: "", back: "" }] }) {
  //deck is an object containing a key called cards
  //cards is an array with keys id, front, back

  //keeps track of the card flipped verses not flipped
  const [flipped, setFlipped] = useState(false);
  const [card, setCard] = useState(cards[0]);
  const history = useHistory();

  const flippHandler = () => setFlipped(!flipped);

  const nextHandler = () => {
    const cardIndex = cards.indexOf(card);
    //0<3, 1<3, 2<3,
    if (cardIndex < cards.length - 1) {
      //setFlipped to false, so the front of the card shows
      setFlipped(false);
      //the next card
      setCard(cards[cardIndex + 1]);
    } else {
      if (
        window.confirm(
          "Restart Cards? Click 'cancel' to return to the home page."
        )
      ) {
        setCard(cards[0]);
        setFlipped(false);
      } else {
        //use history to push to home
        history.push("/");
      }
    }
  };
  //cards is tied to the api call in StudyDeck.js, whenever it updates, cards must also update, this is called a side effect, this is why cards is in our dependency
  useEffect(() => {
    setCard(cards[0]);
  }, [cards]);

  return (
    <div>
      {cards.length ? (
        <div>
          <p>
            Card {card.id} of {cards.length}
          </p>
          <p>{flipped ? card.back : card.front}</p>
          <button onClick={flippHandler}>Flip</button>
          {flipped ? <button onClick={nextHandler}> Next </button> : null}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default StudyCard;
