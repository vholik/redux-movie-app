import axios from "axios";
import { movieDetails, similarMovies, videos } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  const MovieDetailsData = await axios.get(movieDetails(id));
  const SimilarMoviesData = await axios.get(similarMovies(id));
  const VideosData = await axios.get(videos(id));
  dispatch({
    type: "GET_DETAIL",
    payload: {
      movie: MovieDetailsData.data,
      similarMovies: SimilarMoviesData.data.results,
      videos: VideosData.data.results,
    },
  });
};
