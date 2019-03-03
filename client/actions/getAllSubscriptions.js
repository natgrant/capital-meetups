import axios from "axios";

import { getUsersByEvent as apiGetUsersByEvent } from "../api/users";

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

export function getUsersByEvent(id) {
  return dispatch => {
    return apiGetUsersByEvent(id).then(result => {
      dispatch(saveEvents(result));
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
