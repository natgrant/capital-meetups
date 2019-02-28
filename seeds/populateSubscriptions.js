exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("subscriptions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("subscriptions").insert([
        { event_id: 1, user_id: 1 },
        { event_id: 1, user_id: 2 },
        { event_id: 1, user_id: 3 },
        { event_id: 1, user_id: 4 },

        { event_id: 2, user_id: 1 },
        { event_id: 2, user_id: 4 },
        { event_id: 2, user_id: 6 },
        { event_id: 2, user_id: 7 },

        { event_id: 3, user_id: 5 },
        { event_id: 3, user_id: 7 },
        { event_id: 3, user_id: 1 },
        { event_id: 3, user_id: 2 }
      ]);
    });
};
