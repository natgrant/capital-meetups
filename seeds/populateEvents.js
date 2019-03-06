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
          category: "Cycling",
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
        },
        {
          id: 6,
          user_id: 2,
          name: "Table Tennis",
          location: "Victoria University",
          description:
            "Table Tennis club is on every Tuesday, open to all levels just bring your bat",
          category: "Sport",
          date: 1551314863037,
          is_open: "true",
          type: "Afternoon",
          image: "/images/tabletennis.jpg"
        },
        {
          id: 7,
          user_id: 3,
          name: "Ultimate Frisbee",
          location: "Wellington Sportsground",
          description:
            "Ultimate, originally known as Ultimate frisbee, is a non-contact team sport played with a flying disc.",
          category: "Sport",
          date: 1551314863037,
          is_open: "true",
          type: "Afternoon",
          image: "/images/frisbee.jpg"
        },
        {
          id: 8,
          user_id: 4,
          name: "Standup Comedy Night",
          location: "The Fringe Bar",
          description:
            "The capital's longest running open mic comedy night. Our first shows for 2019! Comedy gold and comedy coal, each night is a guaranteed gamble. If you’re trying comedy for the first time, Raw Meat is the best place to start.",
          category: "Comedy",
          date: 1551314863037,
          is_open: "true",
          type: "Evening ",
          image: "/images/comedy.jpg"
        },
        {
          id: 9,
          user_id: 1,
          name: "Permaculture",
          location: "Aro Valley Community Hall",
          description:
            "Discussion of Permaculture, and all things gardening. Permaculture is a set of design principles centered around whole systems thinking simulating or directly utilizing the patterns and resilient features observed in natural ecosystems.",
          category: "Plants",
          date: 1551314863037,
          is_open: "true",
          type: "Morning",
          image: "/images/plant.jpg"
        },
        {
          id: 10,
          user_id: 6,
          name: "German Film Evening",
          location: "Goethe Insitut, Wellington",
          description:
            "Come and watch some German Films. The Goethe-Institut is the Federal Republic of Germany’s cultural institute, active worldwide. We promote the study of German abroad and encourage international cultural exchange.",
          category: "Languages",
          date: 1551314863037,
          is_open: "true",
          type: "Evening",
          image: "/images/german.jpg"
        },
        {
          id: 11,
          user_id: 6,
          name: "Cycle Around Town",
          location: "Cuba Street",
          description:
            "Join us for a cycle around the Capital city, we meet every week. Cycling is a smart investment; the local environment, economy and all road users benefit from it. Cities around the world are making changes to support cycling as a way to provide people with transport choice, and we are doing the same here.",
          category: "Cycling",
          date: 1551314863037,
          is_open: "true",
          type: "Half day",
          image: "/images/cycle.jpg"
        },
        {
          id: 12,
          user_id: 2,
          name: "Coffee and Draw",
          location: "Fidels",
          description:
            "Drink coffee and draw with us at Fidels! We'll have all kinds of friendly and laid back activities and things to sketch.",
          category: "Coffee",
          date: 1551598786956,
          is_open: "true",
          type: "Quick",
          image: "/images/coffee-draw.jpg"
        },
        {
          id: 13,
          user_id: 2,
          name: "Learn to Sew",
          location: "Karori Community Centre",
          description:
            "We have a fantastic new weekend - learn to sew workshop with Brenda Turner on Sat March 23rd and Sun 24th. This follows on from our beginner sewing class last year yet will also suit beginners as well.",
          category: "Arts and Crafts",
          date: 1551314863037,
          is_open: "true",
          type: "Evening class",
          image: "/images/sew.jpg"
        }
      ]);
    });
};
