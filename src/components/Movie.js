import React from "react";
import Star from "../img/star.svg";
import styled from "styled-components";
import { Routes, Route, Link } from "react-router-dom";
const Movie = ({ id, image, title, rating, genres, genreIds }) => {
  const movieGenres = genres.filter((genre) => genreIds.includes(genre.id));
  return (
    <Link to={`/movies/${id}`} style={{ textDecoration: "none" }}>
      <MovieCard>
        <div className="image-wrapper">
          <img src={image} alt={title} className="cover" />
          {rating !== 0 && (
            <div className="rating-wrapper">
              <img src={Star} alt="Rating" className="rating" />
              <h2>{Math.round(rating * 10) / 10}</h2>
              {/* <h2>{rating == 0 ? "Uknown Rating" : rating}</h2> */}
            </div>
          )}
        </div>
        <div className="subtitle">
          <h1>{title}</h1>
          <div className="genres-wrapper">
            {movieGenres.map((genre) => (
              <p>
                {genre.name}
                {movieGenres[movieGenres.length - 1] !== genre ? "/" : null}
              </p>
            ))}
          </div>
        </div>
      </MovieCard>
    </Link>
  );
};

const MovieCard = styled.div`
  img {
    position: relative;
  }

  /* style this to fit your needs */
  /* and remove [alt] to apply to all images*/
  img[alt]:after {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    font-family: "Helvetica";
    font-weight: 300;
    line-height: 2;
    text-align: center;
    content: attr(alt);
  }
  h1 {
    font-size: 20px !important;
    font-weight: 600;
    color: white;
    margin-top: 25px;
  }
  .genres-wrapper {
    margin-top: 15px;
    display: flex;
    flex-wrap: wrap;
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
  }
  .image-wrapper {
    position: relative;
    /* border-radius: 10px; */
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 70%,
      rgba(0, 0, 0, 1) 100%
    );

    height: 380px;
    .rating-wrapper {
      position: absolute;
      display: flex;
      bottom: 20px;
      left: 10px;
      color: white;
      font-weight: 500;
      h2 {
        font-size: 16px;
        font-weight: 400;
        margin-left: 5px;
      }
    }
  }

  .cover {
    /* border-radius: 10px; */

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: -1;
    height: 100%;
    object-fit: cover;
    position: absolute;
  }
  @media screen and (max-width: 1200px) {
    .image-wrapper {
      height: 300px;
    }
  }
  @media screen and (max-width: 1100px) {
    .image-wrapper {
      height: 400px;
    }
    h1 {
      font-size: 18px !important;
      font-weight: 600;
      color: white;
      margin-top: 25px;
    }
  }
  @media screen and (max-width: 850px) {
    .image-wrapper {
      height: 350px;
    }
  }
  @media screen and (max-width: 550px) {
    .image-wrapper {
      height: 300px;
    }
  }
  @media screen and (max-width: 350px) {
    .image-wrapper {
      height: 400px;
    }
  }
`;

export default Movie;
