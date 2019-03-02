exports.up = function(knex, Promise) {
  return knex.schema.createTable("subscriptions", table => {
    table.integer("user_id");
    table.integer("event_id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("subscriptions");
};
