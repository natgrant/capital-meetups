const express = require("express");
const db = require("../db/users");
const router = express.Router();

router.use(express.json());

const { getUserByUsername, getUsersByEvent } = require("../db/users");

// GET /api/v1/users
router.get("/:user_name", (req, res) => {
  getUserByUsername(req.params.user_name)
    .then(events => {
      res.json(events);
    })
    .catch(err => {
      res.status(500).json({ error: "Oh no an error" });
    });
});

router.get("/event/:event_id", (req, res) => {
  getUsersByEvent(req.params.event_id)
    .then(event => {
      res.json(event);
    })
    .catch(err => {
      res.status(500).json({ error: "Oh no an error" });
    });
});

module.exports = router;
