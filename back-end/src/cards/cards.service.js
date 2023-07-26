const knex = require("../db/connection");

function list() {
  return knex("cards").select("*");
}

function read(card_id) {
  return knex("cards as c").select("*").where({ "c.card_id": card_id }).first();
}

function create(newCard) {
  return knex("cards as c")
    .insert(newCard)
    .returning("*")
    .then((createdCards) => createdCards[0]);
}

// card_id deckId and body
function update(updatedCard) {
  return knex("cards as c")
    .select("*")
    .where({ card_id: updatedCard.card_id })
    .update(updatedCard, "*")
    .then((updatedCard) => updatedCard[0]);
}

function destroy(card_id) {
  return knex("cards as c").where({ card_id }).del();
}

module.exports = { list, read, create, update, destroy };
