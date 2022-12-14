import { Link, useLocation } from 'react-router-dom';
import Section from 'components/Section/Section';
import css from './MoviesList.module.css';
import PropTypes from 'prop-types';
const MoviesList = ({ movies, title }) => {
  const location = useLocation();

  return (
    <Section title={title}>
      {movies.map(({ id, title, name }) => {
        return (
          <li key={id.toString()} className={css.moviesListItem}>
            <Link
              to={`/movies/${id}`}
              state={{ from: location }}
            >
              {title || name}
            </Link>
          </li>
        );
      })}
    </Section>
  );
};
export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      name: PropTypes.string,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
};
