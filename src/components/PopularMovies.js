import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMovies } from "../actions/moviesAction";
import styled from "styled-components";
import Movie from "../components/Movie";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowLeft from "../img/arrow-left.svg";
import ArrowRight from "../img/arrow-right.svg";

const PopularMovies = () => {
  const dispatch = useDispatch();

  const [sliderRef, setSliderRef] = useState(null); // Change this shit

  useEffect(() => {
    dispatch(loadMovies());
  }, [dispatch]);

  const { popular, upcoming, nowPlaying, genres } = useSelector(
    (state) => state.movies
  );

  const sliderSettings = {
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 350,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div>
      <HomePage>
        <div className="container">
          <h1 className="header">Popular movies</h1>
          <MovieList>
            <div className="controls">
              <button onClick={sliderRef?.slickPrev} className="before-button">
                <img src={ArrowLeft} alt="Before" />
              </button>
              <button onClick={sliderRef?.slickNext} className="next-button">
                <img src={ArrowRight} alt="Next" />
              </button>
            </div>
            <Slider ref={setSliderRef} {...sliderSettings}>
              {popular &&
                popular.map((movie) => (
                  <Movie
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
            </Slider>
          </MovieList>
        </div>
      </HomePage>
    </div>
  );
};

const HomePage = styled.div`
  .header {
    font-size: 32px;
    font-weight: 400;
    margin-top: 80px;
    color: white;
    text-transform: uppercase;
  }
`;

const MovieList = styled.div`
  margin-top: 25px;
  .slick-slide > div {
    margin: 0 10px;
  }
  .slick-list {
    margin: 0 -10px;
  }
  position: relative;
  .before-button {
    position: absolute;
    height: 80px;
    width: 80px;
    background-color: #ff003b;
    z-index: 100;
    left: -40px;
    border: none;
    margin-top: calc(190px - 40px);
    border-radius: 50%;
  }
  .next-button {
    position: absolute;
    height: 80px;
    width: 80px;
    background-color: #ff003b;
    z-index: 100;
    right: -40px;
    border: none;
    margin-top: calc(190px - 40px);
    border-radius: 50%;
  }
  @media screen and (max-width: 600px) {
    .next-button {
      display: none;
    }
  }
`;
export default PopularMovies;
