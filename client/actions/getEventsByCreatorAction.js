import axios from "axios";

export function getEventsByCreatorAction(userId) {
  return function(dispatch) {
    axios.get(`/api/v1/meetups/creator/${userId}`).then(response => {
      if (!response.status == 200) {
        dispatch(errorMessage(response.status));
      } else {
        dispatch(saveEvents(response.data));
      }
    });
  };
}

export function saveEvents(events) {
  return {
    type: "SAVE_EVENTS",
    events: events
  };
}
