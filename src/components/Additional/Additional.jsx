import Section from 'components/Section/Section';
import { Link } from 'react-router-dom';

const Additional = ({ goBackLink }) => {
  console.log(goBackLink)
  return (
    <Section title="Additional Information">
      <Link to="cast" state={{ from : goBackLink}}>Cast</Link>
      <br />
      <Link to="reviews" state={{from : goBackLink}}>Reviews</Link>
    </Section>
  );
};
export default Additional;
