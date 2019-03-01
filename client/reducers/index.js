import { combineReducers } from "redux";

import auth from "./auth";
import subscriptions from "./subsriptions";

export default combineReducers({
  auth,
  subscriptions
});
