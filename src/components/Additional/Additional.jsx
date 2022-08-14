import { Section } from 'components/Section/Section';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
// import { Reviews } from 'components/Reviews/Reviews';

export const Additional = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <Section title="Additional Information">
      <NavLink to="cast">Cast</NavLink>

      {/* <Route path="reviews" element={<Reviews />} /> */}
      {/* <Reviews movieId={movieId} /> */}
      {/* <Route path="reviews" element={<Reviews />} /> */}
    </Section>
  );
};
