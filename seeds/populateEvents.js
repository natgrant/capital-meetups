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
            "Meetup with other Wellingtonians for casual conversation and good coffee, discuss a myriad of topics, this is a relaxed event and is open to avid coffee fans",
          category: "Coffee",
          date: 1551598786956,
          is_open: "true",
          type: "Quick",
          image: "/images/coffee.jpg"
        },
        {
          id: 2,
          user_id: 1,
          name: "Pottery Classes",
          location: "Wellington Potters Association",
          description:
            "Evening class which caters to different levels of competency, Friday night club is where you can come together and share wine, food and tips on pottery making",
          category: "Arts and Crafts",
          date: 1551314863037,
          is_open: "true",
          type: "Evening class",
          image: "/images/pottery.jpg"
        },
        {
          id: 3,
          user_id: 2,
          name: "Mountain Biking Club",
          location: "Start at Mount Victoria",
          description:
            "Meet up with avid mountain bikers in Wellington, starting at the top of Mount Vic and hitting the trails from medium to hard, end the day with a beer or two and some chats",
          category: "Biking",
          date: 1551314863037,
          is_open: "true",
          type: "Whole day",
          image: "/images/mountainbike.jpg"
        },
        {
          id: 4,
          user_id: 2,
          name: "Language Exchange",
          location: "Wellington Library",
          description:
            "Exchange languages with others, currently we have members from China, England and Germany! Come and pratice a language with us, meeting at Level One of the Library",
          category: "Languages",
          date: 1551314863037,
          is_open: "true",
          type: "Half day",
          image: "/images/language.jpg"
        },
        {
          id: 5,
          user_id: 3,
          name: "Plant Exchange",
          location: "Frank Kitts Park",
          description:
            "Plant exhange for those who are interested, come down to Frank Kitts park and bring some plants which you would like to exchange for other plants - mainly for those who propogate plants to share with others",
          category: "Plants",
          date: 1551314863037,
          is_open: "true",
          type: "Morning",
          image: "/images/plant.jpg"
        }
      ]);
    });
};
