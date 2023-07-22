const knex = require("../db/connection");
const reduceProperties = require("../utils/reduceProperties");

function list() {
  return knex("decks").select("*");
}

const embedCardsInDecks = reduceProperties("deckId", {
  card_id: ["cards", null, "card_id"],
  front: ["cards", null, "front"],
  back: ["cards", null, "back"],
});

// decks?_embed=cards
function listDecksWithEmbededCards() {
  // make each deck imbeded with a card key,
  return knex("decks as d")
    .join("cards as c", "c.deckId", "d.deckId")
    .select("*")
    .then(embedCardsInDecks);
}

function read(deckId) {
  return knex("decks").select("*").where({ deckId }).first();
}

// decks/:deckId?_embed=cards
function readDeckWithEmbededCards(deckId) {
  return knex("decks as d")
    .fullOuterJoin("cards as c", "c.deckId", "d.deckId")
    .select("*")
    .where({ "d.deckId": deckId })
    .then(embedCardsInDecks)
    .then((decksArray) => decksArray[0]);
}

function create(deck) {
  return knex("decks as d")
    .insert(deck)
    .returning("*")
    .then((createdDeck) => createdDeck[0]);
}

// body //id
function update(updatedDeck) {
  return knex("decks as d")
    .select("*")
    .where({ deckId: updatedDeck.deckId })
    .update(updatedDeck, "*")
    .then((updatedDeck) => updatedDeck[0]);
}

function updateWithEmbededCards(updatedDeck) {
  return knex("decks as d")
    .select("*")
    .join("cards as c", "c.deckId", "d.deckId")
    .where({ deckId: updatedDeck.deckId })
    .then((updatedDeck) => updatedDeck[0])
    .then(embedCardsInDecks);
}

module.exports = {
  list,
  listDecksWithEmbededCards,
  read,
  readDeckWithEmbededCards,
  create,
  update,
  updateWithEmbededCards,
};
