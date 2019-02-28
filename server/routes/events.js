const express = require("express");
const db = require("../db/events");
const router = express.Router();

router.use(express.json());

// get /api/v1/meetups
router.get("/", (req, res) => {
  db.getAllEvents().then(events => {
    res.json(events);
  });
});

router.get("/events/:id", (req, res) => {
  const userId = req.params.id;
  db.getEventsByUserId(userId).then(events => {
    res.json(events);
  });
});

router.get("/events/:category", (req, res) => {
  const category = req.body.catagory;
  db.getEventsByCategory(category).then(events => {
    res.json(events);
  });
});

router.get("/events/:id", (req, res) => {
  const eventId = req.params.id;
  db.getOneEvent(id);
});

module.exports = router;
