import { getEventsByCategory as getEventsByCategoryApi } from "../api/events";

export function getEventsByCategory(category) {
  return dispatch => {
    return getEventsByCategoryApi(category).then(events => {
      dispatch(saveSelectedEventsByCategory(events));
    });
  };
}

function saveSelectedEventsByCategory(events) {
  return {
    type: "SAVE_EVENTS_BY_CATEGORY",
    events
  };
}
