exports.up = function(knex, Promise) {
  return knex.schema.createTable("users_events", table => {
    table.integer("user_id");
    table.integer("event_id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users_events");
};
