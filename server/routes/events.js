const express = require("express");
const router = express.Router();

const {
  getAllEvents,
  getEventsByUserId,
  getEventsByCategory,
  getOneEvent,
  createEvent,
  deleteEvent,
  editEvent
} = require("../db/events");

router.use(express.json());

// get /api/v1/meetups
router.get("/", (req, res) => {
  getAllEvents()
    .then(events => {
      res.json(events);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Oh no an error" });
    });
});

router.get("/events/:id", (req, res) => {
  const userId = req.params.id;
  getEventsByUserId(userId)
    .then(events => {
      res.json(events);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Oh no an error" });
    });
});

router.get("/events/:category", (req, res) => {
  const category = req.params.category;
  getEventsByCategory(category)
    .then(events => {
      res.json(events);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Oh no an error" });
    });
});

router.get("/events/:id", (req, res) => {
  const eventId = req.params.id;
  getOneEvent(eventId)
    .then(event => {
      res.json(event);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Oh no an error" });
    });
});

router.post("/", (req, res) => {
  const newEvent = {
    name: req.body.name,
    location: req.body.location,
    description: req.body.description,
    category: req.body.category,
    date: req.body.date,
    is_open: req.body.is_open,
    type: req.body.type,
    image: req.body.image
  };
  createEvent(newEvent)
    .then(newEvent => {
      res.json(newEvent);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Oh no an error" });
    });
});

router.delete("/delete/:id", (req, res) => {
  deleteEvent(req.params.id)
    .then(event => {
      res.json(event);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Oh no an error" });
    });
});

router.post("/edit/:id", (req, res) => {
  let id = req.params.id;
  let event = req.body;
  editEvent(id, event)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Oh no another error" });
    });
});

module.exports = router;
