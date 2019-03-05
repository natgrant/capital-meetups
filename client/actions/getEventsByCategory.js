import { getEventsByCategory as getEventsByCategoryApi } from "../api/events";

export function getEventsByCategory(category) {
  return dispatch => {
    console.log("test");
    return getEventsByCategoryApi(category).then(events => {
      console.log(events);
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
