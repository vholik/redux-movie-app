import axios from "axios";
import { findMovies } from "../api";

export const loadMovies = (keywords) => async (dispatch) => {
  const FindMoviesData = await axios.get(findMovies(keywords));

  dispatch({
    type: "FIND_MOVIES",
    payload: {
      findMovies: FindMoviesData.data.results,
    },
  });
};
