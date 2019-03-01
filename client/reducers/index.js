import { combineReducers } from "redux";

import auth from "./auth";
import subscriptions from "./subscriptions";

export default combineReducers({
  auth,
  subscriptions
});
