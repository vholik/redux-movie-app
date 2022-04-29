import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Favorites from "../img/favorites.svg";
import FavoritesFilled from "../img/favorites-filled.svg";
import SimilarMovies from "../components/SimilarMovies";
const MovieDetails = ({
  favoriteMovies,
  setFavoriteMovies,
  isAdded,
  setIsAdded,
}) => {
  const location = useLocation();
  let myLocation = location.pathname.substring(8);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDetail(myLocation));
    window.scrollTo(0, 0);
  }, [dispatch, location]);

  const { movie, similarMovies, videos } = useSelector((state) => state.detail);
  let hoursHandler = (n) => `${(n / 60) ^ 0}h ` + (n % 60) + "m";
  const addToFavorites = () => {
    setFavoriteMovies([...favoriteMovies, movie]);
    setIsAdded(true);
  };

  useEffect(() => {
    setIsAdded(false);
    favoriteMovies.forEach((it) => {
      if (it.id == myLocation) {
        setIsAdded(true);
        console.log(true);
      }
    });
  }, [location, dispatch]);
  const removeFromFavorites = () => {
    setIsAdded(false);
    setFavoriteMovies(favoriteMovies.filter((it) => it.id !== movie.id));
  };
  return (
    <div>
      {movie && (
        <MovieDetailsInner>
          {videos[0] && (
            <div className="wrapper">
              <div className="frame-container">
                <iframe
                  width="100%"
                  height="600"
                  src={`https://www.youtube.com/embed/${videos[0].key}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;showinfo=0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}

          <div className="container">
            {videos.length === 0 && (
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt="Poster"
                className="poster"
              />
            )}

            <div className="header-wrapper">
              <h1>{movie.title}</h1>
              {isAdded ? (
                <img
                  src={FavoritesFilled}
                  alt="Remove from favorites"
                  className="favorite"
                  onClick={() => removeFromFavorites()}
                />
              ) : (
                <img
                  src={Favorites}
                  alt="Add to favorites"
                  className="favorite"
                  onClick={() => addToFavorites()}
                />
              )}
            </div>
            <div className="movie-description">
              <div className="movie-description__inner">
                <div className="genres">
                  {movie.genres &&
                    movie.genres.map((item, key) => (
                      <p>
                        {item.name}
                        {movie.genres[movie.genres.length - 1] !== item
                          ? ", "
                          : null}
                      </p>
                    ))}
                </div>
                <p className="fence">|</p>

                <p>{hoursHandler(movie.runtime)}</p>
                <p className="fence">|</p>
                <p>{movie.release_date && movie.release_date.slice(0, 4)}</p>
              </div>
              <div className="languages">
                {movie.spoken_languages &&
                  movie.spoken_languages.map((it) => (
                    <p>
                      {it.name}
                      {movie.spoken_languages[
                        movie.spoken_languages.length - 1
                      ] !== it
                        ? ", "
                        : null}
                    </p>
                  ))}
              </div>
              <div className="overview">{movie.overview}</div>
            </div>
            <div className="similar-movies">
              {similarMovies && <SimilarMovies movies={similarMovies} />}
            </div>
          </div>
        </MovieDetailsInner>
      )}
    </div>
  );
};
const MovieDetailsInner = styled.div`
  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 35px;
  }
  .similar-movies {
    margin-top: 50px;
  }
  .favorite {
    /* position: absolute;
    top: 0;
    right: 0; */
    height: 25px;
  }
  .container {
    position: relative;
  }
  h1 {
    font-size: 48px;
    color: white;
    text-transform: uppercase;
  }
  .poster {
    margin-top: 150px;
    width: 300px;
  }
  .movie-description {
    color: rgba(255, 255, 255, 0.6);
    font-size: 16px;
    font-weight: 400;
    &__inner {
      margin-top: 25px;
      display: flex;
      align-items: center;
      .genres {
        display: flex;
      }
      .fence {
        margin: 0 10px;
      }
    }
    .languages {
      display: flex;
      margin-top: 10px;
    }
    .overview {
      margin-top: 25px;
      width: 75%;
      font-size: 14px;
      font-weight: 400;
    }
  }
  @media screen and (max-width: 1200px) {
    iframe {
      height: 500px;
    }
  }
  @media screen and (max-width: 900px) {
    iframe {
      height: 400px;
    }
  }
  @media screen and (max-width: 500px) {
    iframe {
      height: 250px;
    }
    h1 {
      font-size: 35px;
    }
    .movie-description__inner {
      font-size: 14px;
    }
    .overview {
      width: 100% !important;
    }
  }
  @media screen and (max-width: 380px) {
    iframe {
      height: 200px;
    }
    .movie-description__inner {
      flex-direction: column;
      justify-content: left;
      align-items: flex-start;
      p {
        margin-top: 5px;
      }
    }
    .languages {
      margin-top: 25px !important;
    }
    .fence {
      display: none;
    }
    h1 {
      width: 70%;
    }
  }
`;
export default MovieDetails;
