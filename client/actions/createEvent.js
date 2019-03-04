import axios from "axios";

export function createEvent(userId, values) {
  const data = {
    name: values.name,
    location: values.location,
    category: values.category,
    description: values.description,
    is_open: "true"
  };
  return function(dispatch) {
    dispatch(loading());
    return axios
      .post(`/api/v1/meetups/create/${userId}`, data)
      .then(response => {
        console.log("sent", res.data);
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
