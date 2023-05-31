import React from "react";
import { Link } from "react-router-dom";
import DeleteCardButton from "./DeleteCardButton";

function CardList({ deck, loadDeck, promiseInProgress }) {
  const { cards = [] } = deck;

  const list = cards.map((card) => (
    <li
      key={card.id}
      className="list-group-item list-group-item-action flex-column align-items-start"
    >
      <div className="row">
        <div className="col-md-10">
          <div className="row">
            <div className="col">{card.front}</div>
            <div className="col">{card.back}</div>
          </div>
        </div>
        <div className="col text-right">
          <Link
            to={`/decks/${deck.id}/cards/${card.id}/edit`}
            className="btn btn-secondary mr-2 btn-sm"
            title="Edit Card"
          >
            <span className="oi oi-pencil" /> Edit
          </Link>
          <DeleteCardButton card={card} loadDeck={loadDeck} />
        </div>
      </div>
    </li>
  ));

  return promiseInProgress === true ? (
    <>
      <span class="placeholder col-6"></span>
      <span class="placeholder w-75"></span>
      <span class="placeholder" style="width: 25%;"></span>
    </>
  ) : (
    <div className="mt-4 card-list">
      <h3 className="blockquote">Cards</h3>
      <ul className="list-group">{list}</ul>
    </div>
  );
}

export default CardList;
