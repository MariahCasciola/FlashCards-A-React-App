const decks = require("./00-decks.json");

exports.seed = function (knex) {
  return knex.raw("TRUNCATE TABLE decks RESTART IDENTITY CASCADE").then(() => {
    return knex("decks").insert(decks);
  });
};
