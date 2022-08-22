import { useState, lazy } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { moviesApi } from 'services/moviesApi';

const Section = lazy(() => import('components/Section/Section'));
const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();
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
    <>
      {!reviews && <p>Loading...</p>}
      {reviews && reviews.length > 0 ? (
        <Section>
          {reviews.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>{' '}
              </li>
            );
          })}
        </Section>
      ) : (
        <p>We don't have any reviews for this film.</p>
      )}
    </>
  );
};
export default Reviews;
