import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMovies } from "../actions/moviesAction";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import styled from "styled-components";
import ArrowRight from "../img/Arrow-right-butoon.svg";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
const MainSlider = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMovies());
  }, [dispatch]);

  const { popular, genres } = useSelector((state) => state.movies);
  const genresHandlers = (num) => {
    return genres.filter((genre) => popular[num].genre_ids.includes(genre.id));
  };
  return (
    <StyledMainSlider>
      {popular && (
        <AwesomeSlider>
          <div
            data-src={`
            https://image.tmdb.org/t/p/original${popular[0].poster_path}`}
          >
            {/* <img
              src={`
          // https://image.tmdb.org/t/p/original${popular[0].poster_path}`}
              alt=""
            /> */}
            <div className="background-gradient"></div>
            <div className="container">
              <div className="slider__inner">
                <h1>{popular[0].title}</h1>
                <div className="genres__inner">
                  {genresHandlers(0).map((el) => (
                    <p>
                      {el.name}
                      {genresHandlers(0)[genresHandlers(0).length - 1] !== el
                        ? "/"
                        : null}
                    </p>
                  ))}
                </div>
                <Link to={`/movies/${popular[0].id}`}>
                  <button>
                    Get more
                    {/* <img src={ArrowRight} alt="Get more" /> */}{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Next */}
          <div
            data-src={`
            https://image.tmdb.org/t/p/original${popular[1].poster_path}`}
          >
            {/* <img
              src={`
          // https://image.tmdb.org/t/p/original${popular[0].poster_path}`}
              alt=""
            /> */}
            <div className="background-gradient"></div>
            <div className="container">
              <div className="slider__inner">
                <h1>{popular[1].title}</h1>
                <div className="genres__inner">
                  {genresHandlers(1).map((el) => (
                    <p>
                      {el.name}
                      {genresHandlers(1)[genresHandlers(1).length - 1] !== el
                        ? "/"
                        : null}
                    </p>
                  ))}
                </div>
                <Link to={`/movies/${popular[1].id}`}>
                  <button>
                    Get more
                    {/* <img src={ArrowRight} alt="Get more" /> */}{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Next */}
          <div
            data-src={`
            https://image.tmdb.org/t/p/original${popular[2].poster_path}`}
          >
            {/* <img
              src={`
          // https://image.tmdb.org/t/p/original${popular[0].poster_path}`}
              alt=""
            /> */}
            <div className="background-gradient"></div>
            <div className="container">
              <div className="slider__inner">
                <h1>{popular[2].title}</h1>
                <div className="genres__inner">
                  {genresHandlers(2).map((el) => (
                    <p>
                      {el.name}
                      {genresHandlers(2)[genresHandlers(2).length - 1] !== el
                        ? "/"
                        : null}
                    </p>
                  ))}
                </div>
                <Link to={`/movies/${popular[2].id}`}>
                  <button>
                    Get more
                    {/* <img src={ArrowRight} alt="Get more" /> */}{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Next */}
          <div
            data-src={`
            https://image.tmdb.org/t/p/original${popular[3].poster_path}`}
          >
            {/* <img
              src={`
          // https://image.tmdb.org/t/p/original${popular[0].poster_path}`}
              alt=""
            /> */}
            <div className="background-gradient"></div>
            <div className="container">
              <div className="slider__inner">
                <h1>{popular[3].title}</h1>
                <div className="genres__inner">
                  {genresHandlers(3).map((el) => (
                    <p>
                      {el.name}
                      {genresHandlers(3)[genresHandlers(3).length - 1] !== el
                        ? "/"
                        : null}
                    </p>
                  ))}
                </div>
                <Link to={`/movies/${popular[3].id}`}>
                  <button>
                    Get more
                    {/* <img src={ArrowRight} alt="Get more" /> */}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </AwesomeSlider>
      )}
    </StyledMainSlider>
  );
};

const StyledMainSlider = styled.div`
  position: relative;
  .awssld__bullets button {
    height: 10px;
    width: 10px;
    background-color: rgba(255, 255, 255, 0.1);
  }
  .awssld__container {
    padding-bottom: 45%;
  }
  .background-gradient {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 30%,
      #15161a 100%
    );
    height: 1000px;
    width: 100%;
    position: absolute;
    bottom: 0;
  }
  .awssld__content {
    display: block;
  }
  .slider__inner {
    position: absolute;
    bottom: 150px;
    h1 {
      font-size: 64px;
      color: white;
      text-transform: uppercase;
    }
    .genres__inner {
      display: flex;
      color: rgba(211, 211, 211, 0.6);
      font-size: 16px;
      margin-top: 15px;
    }
    button {
      margin-top: 35px;
      padding: 20px 60px;
      background-color: #ff003b;
      transition: background 0.2s linear;
      border: none;
      font-family: "Inter", sans-serif;
      font-weight: 500;
      font-size: 16px;
      color: white;
      cursor: pointer;
      &:hover {
        background-color: #e00034;
      }
    }
  }
  @media screen and (max-width: 1200px) {
    .awssld__container {
      padding-bottom: 60%;
    }
  }
  @media screen and (max-width: 850px) {
    .awssld__container {
      padding-bottom: 75%;
    }
  }
  @media screen and (max-width: 700px) {
    .awssld__container {
      padding-bottom: 100%;
    }
  }
  @media screen and (max-width: 550px) {
    .awssld__container {
      padding-bottom: 130%;
    }
    .slider__inner {
      bottom: 100px;
      h1 {
        font-size: 41px;
      }
      .genres__inner {
        font-size: 14px;
      }
      button {
        font-size: 14px;
      }
    }
  }
  @media screen and (max-width: 380px) {
    .awssld__container {
      padding-bottom: 170%;
    }
  }
`;

export default MainSlider;
