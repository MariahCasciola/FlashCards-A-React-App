import React from "react";
import BreadCrumb from "../../BreadCrumb";
import StudyDeck from "./StudyDeck";

function StudyScreen({deck}) {
  return (
    <div>
      <BreadCrumb />
      <StudyDeck deck={deck}/>
    </div>
  );
}

export default StudyScreen;
