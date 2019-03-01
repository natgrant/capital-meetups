import { getAllEvents as apiGetAllEvents } from "../api/events";
import { getAllCategories as apiGetAllCategories } from "../api/events";

export function getAllEvents() {
  return dispatch => {
    return apiGetAllEvents().then(events => {
      dispatch(saveEvents(events));
    });
  };
}

export function getAllCategories() {
  return dispatch => {
    return apiGetAllCategories().then(Categories => {
      dispatch(saveCategories(Categories));
    });
  };
}
