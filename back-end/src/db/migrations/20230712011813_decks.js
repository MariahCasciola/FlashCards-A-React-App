exports.up = function (knex) {
  return knex.schema.createTable("decks", (table) => {
    table.increments("decks_id").primary();
    table.string("name");
    table.string("description");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("decks");
};
