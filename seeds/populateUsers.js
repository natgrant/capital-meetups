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
          user_name: "Ross",
          email_address: "test@devacademy.co.nz",
          contact_details: "09888888",
          hash: hashSync("Krang", saltRounds)
        },
        {
          id: 2,
          user_name: "Alex",
          email_address: "alex@devacademy.co.nz",
          contact_details: "09888888",
          hash: hashSync("test", saltRounds)
        },
        {
          id: 3,
          user_name: "Ranjit",
          email_address: "ranjit@devacademy.co.nz",
          contact_details: "09888888",
          hash: hashSync("test", saltRounds)
        },
        {
          id: 4,
          user_name: "Arpo",
          email_address: "arpo@devacademy.co.nz",
          contact_details: "09888888",
          hash: hashSync("test", saltRounds)
        },
        {
          id: 5,
          user_name: "Harry",
          email_address: "harry@devacademy.co.nz",
          contact_details: "09888888",
          hash: hashSync("test", saltRounds)
        },
        {
          id: 6,
          user_name: "Nat",
          email_address: "nat@devacademy.co.nz",
          contact_details: "09888888",
          hash: hashSync("test", saltRounds)
        }
      ]);
    });
};
