import { moviesApi } from 'services/moviesApi';
import { useState, useEffect } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    moviesApi.getTrendingMovies().then(({ data }) => {
      setMovies(data.results);
    });
  }, []);

  console.log(movies);
  return (
    movies !== null && <MoviesList movies={movies} title="Trending Today" />
  );
};
export default Home;
