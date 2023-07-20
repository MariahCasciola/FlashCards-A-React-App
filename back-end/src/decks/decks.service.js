const knex = require("../db/connection");
const reduceProperties = require("../utils/reduceProperties");

function list() {
  return knex("decks").select("*");
}

const reduceDecks = reduceProperties("deckId", {
  card_id: ["cards", null, "card_id"],
  front: ["cards", null, "front"],
  back: ["cards", null, "back"],
});

// decks?_embed=cards, to check if the list
function listDecksWithEmbededCards() {
  // make each deck imbeded with a card key,
  return knex("decks as d")
    .join("cards as c", "c.deckId", "d.deckId")
    .select("*")
    .then(reduceDecks);
}

function read(deckId) {
  return knex("decks").select("*").where({ deckId }).first();
}

function readDeckWithEmbededCards(deckId) {
  return knex("decks as d")
    .fullOuterJoin("cards as c", "c.deckId", "d.deckId")
    .select("*")
    .where({ "d.deckId": deckId })
    .then(reduceDecks);
}

module.exports = {
  list,
  listDecksWithEmbededCards,
  read,
  readDeckWithEmbededCards,
};
