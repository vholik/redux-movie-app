import axios from "axios";
import { findMovies } from "../api";

export const searchMovies = (keyword) => async (dispatch) => {
  const SearchData = await axios.get(findMovies(keyword));

  dispatch({
    type: "SEARCH_MOVIES",
    payload: {
      search: SearchData.data.results,
    },
  });
};
