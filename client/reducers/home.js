const initialState = {
  events: [],
  categories: [],
  selectedEvent: {},
  selectedEventUsers: [],
  selectedEventsByCategory: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_EVENTS":
      return { ...state, events: action.events };
    case "SAVE_SELECTED_EVENT":
      return { ...state, selectedEvent: action.event };
    case "SAVE_SELECTED_EVENT_USERS":
      return { ...state, selectedEventUsers: action.users };
    case "SAVE_EVENTS_BY_CATEGORY":
      return { ...state, selectedEventsByCategory: action.events };
    case "SAVE_CATEGORIES":
      return { ...state, categories: action.categories };
    default:
      return state;
  }
};

export default reducer;
