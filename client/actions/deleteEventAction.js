import axios from "axios";

export function deleteEventAction(eventId, userId) {
  return function(dispatch) {
    axios
      .delete(`/api/v1/meetups/delete/${eventId}/${userId}`)
      .then(respond => {
        console.log("respond.data", respond.data);
        dispatch(saveEvents(respond.data));
      });
  };
}
export function saveEvents(events) {
  return {
    type: "SAVE_EVENTS",
    events: events
  };
}
