const testEnv = require("../setup-db");
const events = require("../../../server/db/events");
let testDb = null;

beforeEach(() => {
  testDb = testEnv.getTestDb();
  return testEnv.initialise(testDb);
});

afterEach(() => testEnv.cleanup(testDb));
