import axios from "axios";
import { getUsersByEvent } from "./getUsersByEvent";
// import { getUsersByEventApi } from "../api/users";

export function joinEventAction(userId, eventId) {
  console.log("userId", userId);
  console.log("eventId", eventId);

  return function(dispatch) {
    axios
      .post(`/api/v1/subscriptions/join/${userId}/${eventId}`)
      .then(eventId => {
        dispatch(getUsersByEvent(eventId)).then(() => {
          alert("Joined");
        });
      });
  };
}
