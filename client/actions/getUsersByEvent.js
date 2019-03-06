import { getUsersByEventApi } from "../api/users";

export function getUsersByEvent(id) {
  return dispatch => {
    return getUsersByEventApi(id).then(users => {
      dispatch(saveSelectedEventUsers(users));
    });
  };
}

export function saveSelectedEventUsers(users) {
  return {
    type: "SAVE_SELECTED_EVENT_USERS",
    users
  };
}
