const express = require("express");
const router = express.Router();
const { getSubscriptionsByUsername } = require("../db/subscriptions");

router.use(express.json());

// GET /api/v1/subscriptions
router.get("/:user_name", (req, res) => {
  const username = req.params.user_name;
  getSubscriptionsByUsername(username)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.status(500).json({ error: "Oh no an error" });
    });
});

module.exports = router;
