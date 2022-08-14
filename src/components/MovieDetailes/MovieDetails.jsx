import { Section } from 'components/Section/Section';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { moviesApi } from 'services/moviesApi';
import { MovieCard } from './MovieCard';
import { Additional } from '../Additional/Additional';
import { Container } from 'components/Container/Container';
import { Outlet } from 'react-router-dom';
export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    moviesApi.getMovieDetails(movieId).then(res => setMovie(res.data));
  }, [movieId]);
  console.log(movie);
  return (
    <Container>
      {movie !== null && (
        <Section>
          <MovieCard movieData={movie} />
          <Additional movieId={movieId} />
          <Outlet />
        </Section>
      )}
    </Container>
  );
};
