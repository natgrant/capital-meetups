const { generatePasswordHash } = require("../auth/hash");

const connection = require("./connection");

function createUser(
  user_name,
  email_address,
  contact_details,
  password,
  testDb
) {
  const db = testDb || connection;

  return generatePasswordHash(password).then(hash => {
    return db("users").insert({
      user_name,
      email_address,
      contact_details,
      hash
    });
  });
}

function userExists(user_name, testDb) {
  const db = testDb || connection;

  return db("users")
    .where("user_name", user_name)
    .then(users => users.length > 0);
}

function getUserByUsername(user_name, testDb) {
  const db = testDb || connection;

  return db("users")
    .where("user_name", user_name)
    .first();
}

function getUsersByEvent(eventId, testDb) {
  const db = testDb || connection;
  return db("subscriptions")
    .join("users", "users.id", "subscriptions.user_id")
    .where("subscriptions.event_id", eventId)
    .select("users.name as name");
}

module.exports = {
  createUser,
  userExists,
  getUserByUsername,
  getUsersByEvent
};
