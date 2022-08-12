import { Section } from 'components/Section/Section';
import { Cast } from 'components/Cast/Cast';
// import { Reviews } from 'components/Reviews/Reviews';

export const Additional = ({ movieId }) => {
  console.log(movieId);
  return (
    <Section title="Additional Information">
      <Cast movieId={movieId} />
      {/* <Reviews movieId={movieId} /> */}
    </Section>
  );
};
