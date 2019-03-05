import { getEventsByCategoryApi } from "../api/events";

export function getEventsByCategory(id) {
  return dispatch => {
    return getEventsByCategoryApi(id).then(category => {
      dispatch(saveSelectedEventsByCategory(category));
    });
  };
}

function saveSelectedEventsByCategory() {
  return {
    type: "SAVE_EVENTS_BY_CATEGORY",
    category
  };
}
