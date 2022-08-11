import { Link } from 'react-router-dom';
import { Section } from 'components/Section/Section';
import css from './MoviesList.module.css';
export const MoviesList = ({ movies, title }) => {
  return (
    <Section title={title}>
      {movies.map(movie => {
        return (
          <li key={movie.id.toString()} className={css.moviesListItem}>
            <Link to={`${movie.id}`}>{movie.title || movie.name}</Link>
          </li>
        );
      })}
    </Section>
  );
};
