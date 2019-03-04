const initialState = { events: [], categories: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_EVENTS":
      return { ...state, events: action.events };
    case "SAVE_CATEGORIES":
      return { ...state, categories: action.categories };
    case "DEL_EVENT":
      return {
        ...state,
        events: state.events.filter(event => event.id !== action.id)
      };
    default:
      return state;
  }
};

export default reducer;
