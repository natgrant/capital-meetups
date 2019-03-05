const request = require("supertest");
const app = require("../../../server/server");
describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get(" /api/v1/meetups")
      .expect(200);
  });
});
