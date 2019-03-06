import axios from "axios";
import { getUsersByEventApi } from "../api/users";

export function joinEventAction(userId, eventId) {
  return function(dispatch) {
    axios
      .post(`/api/v1/subscriptions/join/${userId}/${eventId}`)
      .then(userId => {
        return getUsersByEventApi(eventId);
      })
      .then(users => {
        console.log("test", users);
        dispatch(saveSelectedEventUsers(users));
      })
      .then(() => {
        alert("Joined");
      });
  };
}

function saveSelectedEventUsers(users) {
  return {
    type: "SAVE_SELECTED_EVENT_USERS",
    users
  };
}
