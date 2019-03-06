exports.up = function(knex, Promise) {
  return knex.schema.createTable("events", table => {
    table.increments("id").primary();
    table.integer("user_id");
    table.string("name");
    table.string("location");
    table.string("description", 1000);
    table.string("category");
    table.bigint("date");
    table.boolean("is_open");
    table.string("type");
    table.string("image", 1000);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("events");
};
