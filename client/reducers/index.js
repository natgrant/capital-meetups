import { combineReducers } from "redux";
import { reducer as formRecuer } from "redux-form";

import auth from "./auth";
import home from "./home";
import subscriptions from "./subscriptions";

export default combineReducers({
  auth,
  home,
  subscriptions,
  form: formRecuer
});
