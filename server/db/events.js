const connection = require("./connection");

function getAllEvents(testDb) {
  const db = testDb || connection;
  return db("events").select();
}

function getEventsByUserId(userId, testDb) {
  const db = testDb || connection;
  return db("user_event")
    .join("event", "user_event.event_id", "event.id")
    .where("user_event.user_id", userId)
    .select(
      "event.name as name",
      "event.description as description",
      "event.location as location",
      "event.date as date"
    );
}

function getEventByCategory(category, testDb) {
  const db = testDb || connection;
  return db("events")
    .where("category", category)
    .select();
}

function getOneEvent(id, testDb) {
  const db = testDb || connection;
  return db("events")
    .where("id", id)
    .first();
}

function createEvent(newEvent, testDb) {
  const db = testDb || connection;
  return db("users")
    .where("user.id", event.user_id)
    .first()
    .then(user => {
      return db("events")
        .insert(newEvent)
        .then(data => {
          return db("events").select();
        });
    });
}

function deleteEvent(id) {
  const db = testDb || connection;
  return db("events")
    .where("id", id)
    .del()
    .then(data => {
      return db("events").select();
    });
}

function removeEventByUserId(userId, eventId) {
  const db = testDb || connection;
  return db("user-event")
    .where("userID", userId)
    .Where("eventID", eventId)
    .del();
}
module.exports = {
  getAllEvents,
  getEventsByUserId,
  getEventByCategory,
  getOneEvent,
  createEvent,
  deleteEvent,
  removeEventByUserId
};
