const connection = require("./connection");

function getSubscriptionsByUsername(username, testDb) {
  const db = testDb || connection;
  return db("users")
    .where("user_name", username)
    .first()
    .then(userId => {
      return db("subscriptions")
        .join("events", "subscriptions.event_id", "events.id")
        .where("subscriptions.user_id", userId)
        .select(
          "events.name as name",
          "events.description as description",
          "events.location as location",
          "events.date as date"
        );
    });
}

function createSubscription(userId, eventId, testDb) {
  const db = testDb || connection;
  return db("subscrptions").insert({
    userId,
    eventId
  });
}

function removeSubscription(userId, eventId, testDb) {
  const db = testDb || connection;
  return db("subscriptions")
    .where("userId", userId)
    .Where("eventId", eventId)
    .del();
}
module.exports = {
  createSubscription,
  removeSubscription,
  getSubscriptionsByUsername
};
