export const popularMoviesURL = (pageNumber = 1) =>
  `https://api.themoviedb.org/3/movie/popular?api_key=ca8faa15b20772aa07d4a04d23148415&language=en-US&page=${pageNumber}`;
export const upcomingMoviesURL = (pageNumber = 1) =>
  `https://api.themoviedb.org/3/movie/upcoming?api_key=ca8faa15b20772aa07d4a04d23148415&language=en-US&page=${pageNumber}`;
export const nowPlayingMoviesURL = (pageNumber = 1) =>
  `https://api.themoviedb.org/3/movie/now_playing?api_key=ca8faa15b20772aa07d4a04d23148415&language=en-US&page=${pageNumber}`;
export const moviesGenres =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=ca8faa15b20772aa07d4a04d23148415&language=en-US";

export const movieDetails = (movieId) =>
  `https://api.themoviedb.org/3/movie/${movieId}?api_key=ca8faa15b20772aa07d4a04d23148415&language=en-US`;

export const findMovies = (keywords, page = 1) =>
  `https://api.themoviedb.org/3/search/movie?api_key=ca8faa15b20772aa07d4a04d23148415&language=en-US&query=${keywords}&page=${page}&include_adult=false`;

export const similarMovies = (id) =>
  `https://api.themoviedb.org/3/movie/${id}/similar?api_key=ca8faa15b20772aa07d4a04d23148415&language=en-US&page=1`;

export const videos = (id) =>
  `https://api.themoviedb.org/3/movie/${id}/videos?api_key=ca8faa15b20772aa07d4a04d23148415&language=en-US`;
