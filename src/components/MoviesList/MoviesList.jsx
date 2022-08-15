import { Link } from 'react-router-dom';
import Section from 'components/Section/Section';
import css from './MoviesList.module.css';
import slugify from 'slugify';
const MoviesList = ({ movies, title }) => {
  const makeSlug = string =>
    slugify(string, {
      lower: true,
    });

  return (
    <Section title={title}>
      {movies.map(movie => {
        return (
          <li key={movie.id.toString()} className={css.moviesListItem}>
            <Link to={`/movies/${makeSlug(`${movie.title} ${movie.id}`)}`}>
              {movie.title || movie.name}
            </Link>
          </li>
        );
      })}
    </Section>
  );
};
export default MoviesList;
