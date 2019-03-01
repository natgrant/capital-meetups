const express = require("express");
const router = express.Router();
const {
  createSubscription,
  removeSubscription,
  getSubscriptionsByUserId
} = require("../db/subscriptions");

router.use(express.json());

router.get("/:userId", (req, res) => {
  const id = req.params.userId;
  getSubscriptionsByUserId(id)
    .then(events => {
      res.json(events);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Oh no an error" });
    });
});
module.exports = router;
