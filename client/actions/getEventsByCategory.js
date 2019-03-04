import { getEventsByCategory } from "../api/events";

export function getEventsByCategory() {
  return dispatch => {
    return getEvents().then(events => {
      dispatch(saveEvents(events));
    });
  };
}
