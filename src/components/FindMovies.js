import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { searchMovies } from "../actions/searchAction";
import { loadMovies } from "../actions/moviesAction";
import Movie from "./Movie";
const FindMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);

    dispatch(loadMovies());
  }, [dispatch]);
  const { search } = useSelector((state) => state.search);
  const { genres } = useSelector((state) => state.movies);
  const inputHanlder = (e) => {
    dispatch(searchMovies(e.target.value));
  };
  return (
    <div>
      <SearchInner>
        <div className="container">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for movies..."
              onChange={inputHanlder}
            />
          </div>
          <div className="search-wrapper">
            {search.map((movie) => (
              <Movie
                className="movie"
                genres={genres}
                genreIds={movie.genre_ids}
                key={movie.id}
                id={movie.id}
                image={`
      https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                title={movie.title}
                rating={movie.vote_average}
              />
            ))}
          </div>
        </div>
      </SearchInner>
    </div>
  );
};

const SearchInner = styled.div`
  input {
    margin-top: 35px;
    font-size: 16px;
    padding: 15px 10px;
    border: none;
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    outline: none;
    color: rgba(255, 255, 255, 0.6);
    font-family: Inter, sans-serif;
    margin-bottom: 35px;
  }
  margin-top: 105px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  .search-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    a {
      flex: 1 0 15%;
    }
  }
  @media screen and (max-width: 1100px) {
    a {
      flex: 1 0 22% !important;
    }
  }

  @media screen and (max-width: 750px) {
    a {
      flex: 1 0 30% !important;
    }
  }

  @media screen and (max-width: 380px) {
    a {
      flex: 1 0 100% !important;
    }
  }
`;

export default FindMovies;
