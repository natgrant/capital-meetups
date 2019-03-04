const initialState = { events: [], categories: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_EVENTS":
      return { ...state, events: action.events };
    case "SAVE_CATEGORIES":
      return { ...state, categories: action.categories };
    case "DEL_EVENT":
      const leftEvents = state.events.filter(event => event.id !== action.id);
      return {
        ...state,
        events: leftEvents
      };
    default:
      return state;
  }
};

export default reducer;
