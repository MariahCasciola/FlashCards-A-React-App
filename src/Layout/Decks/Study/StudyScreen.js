import React from "react";
import BreadCrumb from "../../BreadCrumb";
import StudyDeck from "./StudyDeck";

function StudyScreen() {
  return (
    <div>
      <BreadCrumb />
      <h2> Deck Title </h2>
      <StudyDeck />
    </div>
  );
}

export default StudyScreen;
