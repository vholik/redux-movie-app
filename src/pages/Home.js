import React, { useState, useEffect } from "react";
import UpcomingMovies from "../components/UpcomingMovies";
import PopularMovies from "../components/PopularMovies";
import NowPlayingMovies from "../components/nowPlayingMovies";
import Header from "../components/Header";
import MainSlider from "../components/MainSlider";
import Footer from "../components/Footer";
import MovieDetails from "../components/MovieDetails";
import { Routes, Route } from "react-router-dom";
import FindMovies from "../components/FindMovies";

const Home = () => {
  const [favoriteMovies, setFavoriteMovies] = useState(
    JSON.parse(localStorage.getItem("movies") || "[]")
  );
  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(favoriteMovies));
  }, [favoriteMovies]);
  const [isAdded, setIsAdded] = useState(false);

  return (
    <>
      <Header
        favoriteMovies={favoriteMovies}
        setFavoriteMovies={setFavoriteMovies}
        isAdded={isAdded}
        setIsAdded={setIsAdded}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainSlider />
              <UpcomingMovies />
              <PopularMovies />
              <NowPlayingMovies />
            </>
          }
        />
        <Route
          exact
          path="/movies/:id"
          element={
            <MovieDetails
              setFavoriteMovies={setFavoriteMovies}
              favoriteMovies={favoriteMovies}
              isAdded={isAdded}
              setIsAdded={setIsAdded}
            />
          }
        />
        <Route path="/movies" element={<FindMovies />} />
      </Routes>

      <Footer />
    </>
  );
};

export default Home;
