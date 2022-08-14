import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { moviesApi } from 'services/moviesApi';
import { Section } from 'components/Section/Section';
export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
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
    <Section>
      {reviews.length > 0 ? (
        reviews.map(({ author, content, id }) => {
          return (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>{' '}
            </li>
          );
        })
      ) : (
        <p>We don't have any reviews for this film</p>
      )}
    </Section>
  );
};
