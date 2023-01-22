import React from "react";
import DeleteDeckButton from "./DeleteDeckButton";
import StudyButton from "./StudyButton";
import ViewButton from "./ViewButton";

function Deck({ deck = {} }) {
  const { name = "", description = "" } = deck;
  return !deck ? null : (
    <div>
      {/* we want to render name and description */}
      <h3>{name} </h3>
      <p> {description} </p>
      <ViewButton />
      <StudyButton />
      <DeleteDeckButton />
    </div>
  );
}
export default Deck;
