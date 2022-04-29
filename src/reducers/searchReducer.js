const initState = {
  search: [],
};

export const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES":
      return {
        ...state,
        search: action.payload.search,
      };
    default:
      return { ...state };
  }
};
