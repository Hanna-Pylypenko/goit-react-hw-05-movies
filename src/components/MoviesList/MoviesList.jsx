import { Link } from 'react-router-dom';
import { Section } from 'components/Section/Section';
import { useParams } from 'react-router-dom';
import css from './MoviesList.module.css';
export const MoviesList = ({ movies, title }) => {
  const value = useParams();
  console.log(value);
  return (
    <Section title={title}>
      {movies.map(movie => {
        return (
          <li key={movie.id.toString()} className={css.moviesList2Item}>
            <Link to={`/movies/${movie.id}`}>{movie.title || movie.name}</Link>
          </li>
        );
      })}
    </Section>
  );
};
