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

describe("Testing get events by creator route by id", () => {
  test("Response needs to be a json", done => {
    return request(app)
      .get("/api/v1/meetups/creator/1")
      .expect("Content-Type", /json/)
      .end(done);
  });
});

describe("Testing get events by category route by categoryname", () => {
  test("Response needs to be a json", done => {
    return request(app)
      .get("/api/v1/meetups/category/Coffee")
      .expect("Content-Type", /json/)
      .end(done);
  });
});

describe("Testing post route for adding subscription", () => {
  test("Response needs to be a text/html", done => {
    return request(app)
      .get("/api/v1/subscriptions/join/1/1")
      .expect("Content-Type", "text/html; charset=utf-8")
      .end(done);
  });
});

describe("Testing get route for subscriptions by username", () => {
  test("Response needs to be a json", done => {
    return request(app)
      .get("/api/v1/subscriptions/test")
      .expect("Content-Type", /json/)
      .end(done);
  });
});

describe("Testing get route for getting user by username", () => {
  test("Response needs to be a json", done => {
    return request(app)
      .get("/api/v1/users/test")
      .expect("Content-Type", /json/)
      .end(done);
  });
});

describe("Testing get route for getting user by event_id", () => {
  test("Response needs to be a json", done => {
    return request(app)
      .get("/api/v1/users/event/1")
      .expect("Content-Type", /json/)
      .end(done);
  });
});
