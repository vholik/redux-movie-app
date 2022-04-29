const initState = {
  trending: [],
  upcoming: [],
  nowPlaying: [],
  genres: [],
};

export const MoviesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        nowPlaying: action.payload.nowPlaying,
        genres: action.payload.genres,
      };
    default:
      return { ...state };
  }
};
