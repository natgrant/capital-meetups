const request = require("supertest");
const app = require("../../../server/server");

describe("Testing get categories route", () => {
  test("Response needs to be a json", done => {
    return request(app)
      .get("/api/v1/meetups")
      .expect("Content-Type", /json/)
      .end(done);
  });
});

describe("Testing get event route by id", () => {
  test("Response needs to be a json", done => {
    return request(app)
      .get("/api/v1/meetups/event/1")
      .expect("Content-Type", /json/)
      .end(done);
  });
});
