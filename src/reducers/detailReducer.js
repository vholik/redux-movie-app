const initState = {
  movie: {},
  similarMovies: [],
  videos: [],
};

const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        movie: action.payload.movie,
        similarMovies: action.payload.similarMovies,
        videos: action.payload.videos,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;
