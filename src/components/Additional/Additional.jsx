import { Section } from 'components/Section/Section';
import { NavLink } from 'react-router-dom';

export const Additional = ({ movieId }) => {
  return (
    <Section title="Additional Information">
      <NavLink to="cast">Cast</NavLink>
      <br />
      <NavLink to="reviews">Reviews</NavLink>
    </Section>
  );
};
