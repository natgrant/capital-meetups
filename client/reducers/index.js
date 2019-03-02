import { combineReducers } from "redux";

import auth from "./auth";
import home from "./home";
import subscriptions from "./subscriptions";

export default combineReducers({
  auth,
  home,
  subscriptions
});
