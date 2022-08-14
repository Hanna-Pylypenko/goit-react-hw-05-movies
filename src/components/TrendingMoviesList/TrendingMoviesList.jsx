import { NavLink } from 'react-router-dom';
import { Section } from 'components/Section/Section';
import { useParams } from 'react-router-dom';
import css from './TrendingMoviesList.module.css';
export const TrendingMoviesList = ({ movies, title }) => {
  const value = useParams();
  console.log(value);
  return (
    <Section title={title}>
      {movies.map(movie => {
        return (
          <li key={movie.id.toString()} className={css.moviesListItem}>
            <NavLink to={`movies/${movie.id}`}>
              {movie.title || movie.name}
            </NavLink>
          </li>
        );
      })}
    </Section>
  );
};
