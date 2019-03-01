const express = require("express");
const router = express.Router();

const {
  getAllEvents,
  getEventByCategory,
  getOneEvent,
  createEvent,
  deleteEvent,
  editEvent
} = require("../db/events");

router.use(express.json());

//GET /api/v1/meetups
router.get("/", (req, res) => {
  getAllEvents()
    .then(events => {
      res.json(events);
    })
    .catch(err => {
      res.status(500).json({ error: "Oh no an error" });
    });
});

// router.get("/events/:id", (req, res) => {
//   const userId = req.params.id;
//   getEventsByUserId(userId)
//     .then(events => {
//       res.json(events);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({ error: "Oh no an error" });
//     });
// });

router.get("/category/:category", (req, res) => {
  const category = req.params.category;
  getEventByCategory(category)
    .then(events => {
      res.json(events);
    })
    .catch(err => {
      res.status(500).json({ error: "Oh no an error" });
    });
});

router.get("/event/:id", (req, res) => {
  const eventId = req.params.id;
  getOneEvent(eventId)
    .then(event => {
      res.json(event);
    })
    .catch(err => {
      res.status(500).json({ error: "Oh no an error" });
    });
});

router.post("/create/:user_id", (req, res) => {
  const userId = req.params.user_id;
  const newEvent = {
    user_id: req.params.user_id,
    name: req.body.name,
    location: req.body.location,
    description: req.body.description,
    category: req.body.category,
    date: req.body.date,
    is_open: req.body.is_open,
    type: req.body.type,
    image: req.body.image
  };
  createEvent(newEvent, userId)
    .then(([id]) => {
      res.json({ id });
    })
    .catch(err => {
      res.status(500).json({ error: "Oh no an error" });
    });
});

router.delete("/delete/:id", (req, res) => {
  deleteEvent(req.params.id)
    .then(event => {
      res.json(event);
    })
    .catch(err => {
      res.status(500).json({ error: "Oh no an error" });
    });
});

router.delete("/removeUser/:id", (req, res) => {
  removeEventByUserId(req.params.id)
    .then(event => {
      res.json(event);
    })
    .catch(err => {
      res.status(500).json({ error: "Oh no an error" });
    });
});

router.post("/edit/:id", (req, res) => {
  let id = req.params.id;
  let event = req.body;
  editEvent(event, id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).json({ error: "Oh no another error" });
    });
});

module.exports = router;
