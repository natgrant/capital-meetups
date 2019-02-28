const connection = require("./connection");

function createSubscription(userId, eventID, testDb) {
  const db = testDb || connection;
  return db("subscrptions").insert({
    userId,
    eventIDd
  });
}

function removeSubscription(userId, eventId, testDb) {
  const db = testDb || connection;
  return db("subscriptions")
    .where("userId", userId)
    .Where("eventId", eventId)
    .del();
}
module.export = {
  createSubscription,
  removeSubscription
};
