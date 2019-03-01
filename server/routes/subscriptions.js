const express = require("express");
const router = express.Router();
const {
  createSubscription,
  removeSubscription,
  getSubscriptionsByUsername
} = require("../db/subscriptions");

router.use(express.json());

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
