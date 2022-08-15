import Section from 'components/Section/Section';
import { useState, useEffect, lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { moviesApi } from 'services/moviesApi';
import { Outlet } from 'react-router-dom';
import { Loading } from 'notiflix';
const MovieCard = lazy(() => import('./MovieCard'));
const Additional = lazy(() => import('../Additional/Additional'));
const Container = lazy(() => import('components/Container/Container'));
const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { slug } = useParams();
  const movieId = slug.match(/[a-z0-9]+$/)[0];

  useEffect(() => {
    moviesApi.getMovieDetails(movieId).then(res => setMovie(res.data));
  }, [movieId]);
  return (
    <Suspense fallback={Loading.pulse()}>
      <Container>
        {movie && (
          <Section>
            <MovieCard movieData={movie} fallback={Loading.remove()} />
            <Additional movieId={movieId} />
            <Outlet />
          </Section>
        )}
      </Container>
    </Suspense>
  );
};
export default MovieDetails;
