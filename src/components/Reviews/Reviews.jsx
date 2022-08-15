import { useState, lazy, Suspense } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { moviesApi } from 'services/moviesApi';
import { Loading } from 'notiflix';

const Section = lazy(() => import('components/Section/Section'));
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { slug } = useParams();
  console.log(slug);
  const movieId = slug.match(/[a-z0-9]+$/)[0];
  useEffect(() => {
    if (movieId !== null) {
      moviesApi
        .getMovieReviews(movieId)
        .then(({ data: { results } }) => {
          setReviews(results);
        })
        .catch(console.log);
    }
  }, [movieId]);

  return (
    <Suspense fallback={Loading.pulse()}>
      <Section>
        {reviews.length > 0 ? (
          reviews.map(({ author, content, id }) => {
            Loading.remove();
            return (
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>{' '}
              </li>
            );
          })
        ) : (
          <p>We don't have any reviews for this film.</p>
        )}
      </Section>
    </Suspense>
  );
};
export default Reviews;
