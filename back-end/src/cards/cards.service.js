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

module.exports = { list, read, create };
