exports.up = function (knex) {
  return knex.schema.createTable("cards", (table) => {
    table.increments("card_id").primary();
    table.string("front");
    table.string("back");
    table.integer("deckId").unsigned();
    table
      .foreign("deckId")
      .references("deckId")
      .inTable("decks")
      .onDelete("cascade");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("cards");
};
