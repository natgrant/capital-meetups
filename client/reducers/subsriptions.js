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
    case "SAVE_SUBCRIPTIONS":
      return {
        ...state,
        loading: action.isFetching,
        subscriptionData: action.subscriptions,
        err: null
      };
    default:
      return state;
  }
}
