import React from "react";
import styled from "styled-components";
import Search from "../img/search.svg";
import Favorites from "../img/favorites.svg";
import { Routes, Route, Link } from "react-router-dom";

const Header = ({ favoriteMovies, setFavoriteMovies, isAdded, setIsAdded }) => {
  return (
    <div>
      <HeaderInner>
        <div className="header-wrapper">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="logo">CINEWATCH</div>
          </Link>
          <div className="right">
            <Link to="/movies" style={{ textDecoration: "none" }}>
              <img src={Search} alt="Search for movies" />
            </Link>
            <div className="favorites">
              <img
                src={Favorites}
                alt="Favorites movies"
                className="favorites-icon"
              />
              <div className="favorites-list">
                <h2 className="favorites-list__title">Favorite movies:</h2>
                {favoriteMovies.length == 0 && (
                  <p className="empty-list">
                    You haven't added any movies to the favorites
                  </p>
                )}
                {favoriteMovies.map((el) => (
                  <div className="favorite-movie">
                    <Link
                      to={`movies/${el.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <h1>{el.title}</h1>
                    </Link>
                    <p
                      onClick={() =>
                        setFavoriteMovies(
                          favoriteMovies.filter((it) => it.id !== el.id)
                        )
                      }
                    >
                      Delete Movie
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </HeaderInner>
    </div>
  );
};

const HeaderInner = styled.div`
  background: linear-gradient(180deg, #15161a 0%, rgba(255, 255, 255, 0) 100%);
  height: 20%;
  .empty-list {
    font-size: 14px;
    font-weight: 400;
    margin-top: 10px;
    color: rgba(255, 255, 255, 0.8);
  }
  position: absolute;
  z-index: 10;
  width: 100%;
  .header-wrapper {
    padding: 0 100px;
    margin-top: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .container-full {
    position: relative;
  }
  .favorites {
    position: relative;
    display: inline-block;
    &:hover .favorites-list {
      opacity: 1;
      pointer-events: all;
    }
    .favorites-list {
      &__title {
        margin-bottom: 15px;
        font-size: 14px;
        font-weight: 400;
      }
      transition: opacity 0.2s linear;
      opacity: 0;
      pointer-events: none;
      position: absolute;
      top: 20px;
      right: 0;
      width: 400px;
      padding: 25px;

      font-size: 16px;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.3);
      border-radius: 6px;
      box-shadow: -6px 11px 44px 0px rgba(0, 0, 0, 0.33);
      background-color: #15161a;
      z-index: 10;

      .favorite-movie {
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
        h1 {
          font-size: 16px;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
        }
        p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
          cursor: pointer;
        }
      }
    }
  }
  .logo {
    font-size: 25px;
    color: white;
    font-weight: 400;
    cursor: pointer;
  }
  .right {
    display: flex;
    img {
      margin-left: 25px;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 1400px) {
    .header-wrapper {
      padding: 0 5%;
    }
  }
  @media screen and (max-width: 400px) {
    .logo {
      font-size: 20px;
      color: white;
      font-weight: 400;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 500px) {
    .favorites-list {
      width: 250px !important;
    }
  }
`;

export default Header;
