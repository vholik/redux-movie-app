import axios from "axios";
import {
  popularMoviesURL,
  upcomingMoviesURL,
  nowPlayingMoviesURL,
  moviesGenres,
} from "../api";

export const loadMovies = () => async (dispatch) => {
  const popularMoviesData = await axios.get(popularMoviesURL());
  const upcomingMoviesData = await axios.get(upcomingMoviesURL());
  const nowPlayingMoviesData = await axios.get(nowPlayingMoviesURL());
  const moviesGenresData = await axios.get(moviesGenres);
  dispatch({
    type: "FETCH_MOVIES",
    payload: {
      popular: popularMoviesData.data.results,
      upcoming: upcomingMoviesData.data.results,
      nowPlaying: nowPlayingMoviesData.data.results,
      genres: moviesGenresData.data.genres,
    },
  });
};
