const express = require("express");
const router = express.Router();

const {
  getAllEvents,
  getEventsByUserId,
  getEventsByCategory,
  getOneEvent,
  createEvent
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
  const category = req.body.catagory;
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
  createEvent(req.body)
    .then(newEvent => {
      res.json(newEvent);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Oh no an error" });
    });
});

module.exports = router;
