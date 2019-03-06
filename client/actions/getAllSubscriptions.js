import axios from "axios";

export function getAllSubscriptions(username) {
  return function(dispatch) {
    dispatch(loading());
    axios.get(`/api/v1/subscriptions/${username}`).then(response => {
      if (!response.status == 200) {
        dispatch(errorMessage(response.status));
      } else {
        dispatch(saveSubscriptions(response.data));
      }
    });
  };
}

function loading() {
  return {
    type: "LOADING",
    isFetching: true
  };
}

function errorMessage(err) {
  return {
    type: "ERROR",
    isFetching: false,
    err
  };
}

function saveSubscriptions(subscriptions) {
  return {
    type: "SAVE_SUBSCRIPTIONS",
    isFetching: false,
    subscriptions
  };
}

export function getMembers(subscriptions) {
  return {
    type: "GET_MEMBERS",
    subscriptions: subscriptions
  };
}
