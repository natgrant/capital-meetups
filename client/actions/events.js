import {
  getAllEvents as apiGetAllEvents,
  getOneEvent,
  getOneEventMembers
} from "../api/events";
import { getAllCategories as apiGetAllCategories } from "../api/events";

export function getAllEvents() {
  return dispatch => {
    return apiGetAllEvents().then(events => {
      dispatch(saveEvents(events));
    });
  };
}

export function getEvent(id) {
  console.log("test1", id);
  return dispatch => {
    return getOneEvent(id)
      .then(event => {
        console.log("test", event);
        dispatch(saveSelectedEvent(event));
        return getOneEventMembers(id);
      })
      .then(members => {
        dispatch(saveSelectedEventMembers(members));
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

export function saveEvents(events) {
  return {
    type: "SAVE_EVENTS",
    events: events
  };
}

export function saveSelectedEvent(event) {
  return {
    type: "SAVE_SELECTED_EVENT",
    event: event
  };
}

export function saveSelectedEventMembers(members) {
  return {
    type: "SAVE_SELECTED_EVENT_MEMBERS",
    members: members
  };
}

export function saveCategories(categories) {
  return {
    type: "SAVE_CATEGORIES",
    categories: categories
  };
}
