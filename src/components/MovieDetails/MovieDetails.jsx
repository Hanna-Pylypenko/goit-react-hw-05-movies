import Section from 'components/Section/Section';
import { useState, useEffect, lazy, Suspense } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { moviesApi } from 'services/moviesApi';
import { Outlet } from 'react-router-dom';

const MovieCard = lazy(() => import('./MovieCard'));
const Additional = lazy(() => import('../Additional/Additional'));
const Container = lazy(() => import('components/Container/Container'));
const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { slug } = useParams();
  const movieId = slug.match(/[a-z0-9]+$/)[0];
  const location = useLocation();
  const goBackLink = location?.state?.from ?? '/';
  console.log(goBackLink);

  useEffect(() => {
    moviesApi.getMovieDetails(movieId).then(res => setMovie(res.data));
  }, [movieId]);

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Container>
        {movie && (
          <Section>
            <Link to={`${goBackLink}`}>Go Back</Link>
            <MovieCard movieData={movie} />
            <Additional movieId={movieId} />
            <Outlet />
          </Section>
        )}
        {!movie && <h1> No information found yet</h1>}
      </Container>
    </Suspense>
  );
};
export default MovieDetails;
