const initialState = {
  subscriptionData: [],
  loading: false
};
export default function subscriptions(state = initialState, action) {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: action.isFetching,
        err: null
      };

    case "ERROR":
      return {
        ...state,
        loading: action.isFetching,
        err: action.err
      };
    case "SAVE_SUBSCRIPTIONS":
      return {
        ...state,
        loading: action.isFetching,
        subscriptionData: action.subscriptions,
        err: null
      };
    case "GET_MEMBERS":
      return {
        ...state,
        loading: action.isFetching,
        subscription: action.subscriptions,
        err: null
      };
    default:
      return state;
  }
}
