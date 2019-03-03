exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("events")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("events").insert([
        {
          id: 1,
          user_id: 1,
          name: "Coffee Catchups",
          location: "Raglan Roast",
          description:
            "Meetup with other Wellingtonians for casual conversation and good coffee",
          category: "Coffee",
          date: 1551598786956,
          is_open: "true",
          type: "Quick catchups",
          image: "/images/coffee.jpg"
        },
        {
          id: 2,
          user_id: 1,
          name: "Pottery Making",
          location: "Wellington Art School",
          description: "Meetup and play with clay",
          category: "arts and crafts",
          date: 1551314863037,
          is_open: "true",
          type: "Half day",
          image: "/defaultimage.jpg"
        },
        {
          id: 3,
          user_id: 1,
          name: "Downhill Mountain Biking",
          location: "Mt Vic",
          description: "Downhill mountain biking meetup, round the city",
          category: "mountain biking",
          date: 1551314863037,
          is_open: "true",
          type: "Whole day",
          image: "/defaultimage.jpg"
        }
      ]);
    });
};
