import axios from "axios";

export function removeSubAction(userId, eventId, username) {
  return function(dispatch) {
    axios
      .delete(`/api/v1/meetups/removeUser/${userId}/${eventId}/${username}`)
      .then(respond => {
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
