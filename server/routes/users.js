const express = require("express");
const db = require("../db/users");
const router = express.Router();

router.use(express.json());

const { getUserByUsername, getUsersByEvent } = require("../db/users");

// GET /api/v1/users
router.get("/:user_name", (req, res) => {
  console.log(req.params.user_name);
  getUserByUsername(req.params.user_name)
    .then(events => {
      res.json(events);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Oh no an error" });
    });
});

router.get("/event/:event_id", (req, res) => {
  console.log(req.params.event_id);
  getUsersByEvent(req.params.event_id)
    .then(event => {
      res.json(event);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Oh no an error" });
    });
});

module.exports = router;
