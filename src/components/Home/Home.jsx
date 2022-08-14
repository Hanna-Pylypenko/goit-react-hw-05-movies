import { moviesApi } from 'services/moviesApi';
import { useState, useEffect } from 'react';
import { TrendingMoviesList } from 'components/TrendingMoviesList/TrendingMoviesList';

export const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    moviesApi.getTrendingMovies().then(({ data }) => {
      setMovies(data.results);
    });
  }, []);

  console.log(movies);
  return (
    movies !== null && (
      <TrendingMoviesList movies={movies} title="Trending Today" />
    )
  );
};
