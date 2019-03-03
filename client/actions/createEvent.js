import axios from "axios";
export function createEvent({ newEvent }) {
  return function(dispatch) {
    dispatch(loading());
    axios.post(`/api/v1//create/:user_name}`).then(response => {
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
