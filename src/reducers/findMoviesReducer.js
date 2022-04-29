const initState = {
  findMovies: [],
};

const findMoviesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FIND_MOVIES":
      return {
        ...state,
        findMovies: action.payload.movies,
      };
    default:
      return { ...state };
  }
};

export default findMoviesReducer;
