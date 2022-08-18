import Section from 'components/Section/Section';
import { useState, useEffect, lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { moviesApi } from 'services/moviesApi';
import { Outlet } from 'react-router-dom';
import GoBackBtn from 'components/GoBackBtn/GoBackBtn';

const MovieCard = lazy(() => import('./MovieCard'));
const Additional = lazy(() => import('../Additional/Additional'));
const Container = lazy(() => import('components/Container/Container'));
const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { slug } = useParams();
  const movieId = slug.match(/[a-z0-9]+$/)[0];
  console.log(movie);

  useEffect(() => {
    moviesApi.getMovieDetails(movieId).then(res => setMovie(res.data));
  }, [movieId]);

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Container>
        {movie && (
          <Section>
            <GoBackBtn />
            <MovieCard movieData={movie} fallback={<h1>Loading...</h1>} />
            <Additional movieId={movieId} />
            <Outlet />
          </Section>
        )}
      </Container>
    </Suspense>
  );
};
export default MovieDetails;
