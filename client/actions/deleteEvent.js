import axios from "axios";

export function deleteEventAction(eventId) {
  return function(dispatch) {
    axios.delete(`/api/v1/meetups/delete/${eventId}`).then(respond => {
      dispatch(deleteEvent(respond.data));
    });
  };
}

function deleteEvent(id) {
  return {
    type: "DEL_EVENT",
    id
  };
}
