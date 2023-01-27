import React from "react";

function Card({ card,  }) {
  return (
    <div>
      <p> {card.front}</p>
      <p> {card.back} </p>
    </div>
  );
}

export default Card;
