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
  const { movieId } = useParams();
  const location = useLocation();
  const goBackLink = location?.state?.from ?? '/';

  useEffect(() => {
    moviesApi.getMovieDetails(movieId).then(res => setMovie(res.data));
  }, [movieId]);

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Container>
        {movie && (
          <Section>
            <Link to={goBackLink}>Go Back</Link>
            <MovieCard movieData={movie} />
            <Additional goBackLink={goBackLink}/>
            <Suspense fallback={<h1>Loading...</h1>}>
              <Outlet />
            </Suspense>
          </Section>
        )}
        {!movie && <p> Loading...</p>}
      </Container>
    </Suspense>
  );
};
export default MovieDetails;
