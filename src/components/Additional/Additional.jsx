import { Section } from 'components/Section/Section';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
// import { Reviews } from 'components/Reviews/Reviews';

export const Additional = () => {
  return (
    <Section title="Additional Information">
      <NavLink to="cast">Cast</NavLink>
      <br />
      <NavLink to="reviews">Reviews</NavLink>
      <Section>
        <Outlet />
      </Section>
    </Section>
  );
};
