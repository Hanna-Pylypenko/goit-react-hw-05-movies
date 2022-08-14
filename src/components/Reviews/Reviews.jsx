import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { moviesApi } from 'services/moviesApi';
import { Section } from 'components/Section/Section';
export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    moviesApi
      .getReviews(movieId)
      .then(({ data: { results } }) => {
        setReviews(results);
      })
      .catch(console.log);
  }, [movieId]);
  console.log(reviews);
  return (
    <Section title="Reviews">
      {reviews.length ? (
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
