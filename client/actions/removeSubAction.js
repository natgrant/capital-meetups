import axios from "axios";

export function removeSubAction(eventId, userId) {
  return function(dispatch) {
    axios
      .delete(`/api/v1/meetups/delete/${eventId}/${userId}/${username}`)
      .then(respond => {
        console.log("respond.data", respond.data);
        dispatch(saveSubscriptions(respond.data));
      });
  };
}
function saveSubscriptions(subscriptions) {
  return {
    type: "SAVE_SUBSCRIPTIONS",
    isFetching: false,
    subscriptions
  };
}
