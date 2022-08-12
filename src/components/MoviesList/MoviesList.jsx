import { Link } from 'react-router-dom';
import { Section } from 'components/Section/Section';
// import { useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';
export const MoviesList = ({ movies, title }) => {
  // const { pathname } = useLocation();
  return (
    <Section title={title}>
      {movies.map(({ id, title, name }) => {
        return (
          <li key={id.toString()} className={css.moviesListItem}>
            <Link to={`movies/${id}`}>{title || name}</Link>
          </li>
        );
      })}
    </Section>
  );
};
