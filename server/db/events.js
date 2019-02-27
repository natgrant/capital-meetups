const connection = require("./connection");

function getAllEvents(testDb) {
  const db = testDb || connection;
  return db("events").select();
}

function getEventsByUserId(id, testDb) {
  const db = testDb || connection;
  return db("user_event")
    .join("event", "user_event.event_id", "event.id")
    .where("user_event.user_id", id)
    .select(events);
}
module.exports = {
  getAllEvents,
  getEventsByUserId
};
