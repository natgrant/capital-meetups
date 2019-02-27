const { hashSync } = require("bcrypt");
const saltRounds = 10;

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          user_name: "test",
          email_address: "test@devacademy.co.nz",
          contact_details: "123",
          hash: hashSync("Krang", saltRounds)
        }
      ]);
    });
};
