import { Section } from 'components/Section/Section';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { moviesApi } from 'services/moviesApi';
import { MovieCard } from './MovieCard';
export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    moviesApi.getMovieDetails(movieId).then(({ data }) => setMovie(data));
  }, [movieId]);
  console.log(movie);
  return <Section>{movie !== null && <MovieCard movieData={movie} />}</Section>;
};
