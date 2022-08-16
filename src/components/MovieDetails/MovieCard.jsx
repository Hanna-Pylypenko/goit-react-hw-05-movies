import { moviesApi } from 'services/moviesApi';
import PropTypes from 'prop-types';
import css from './MovieCard.module.css';
const MovieCard = ({ movieData }) => {
  const { title, name, poster_path, overview, genres, vote_average } =
    movieData;
  console.log(movieData);
  return (
    <div className={css.movieCard}>
      <img
        src={`${moviesApi.POSTER_URL}${poster_path}`}
        width="250px"
        alt={title || name}
      />
      <div className={css.movieInfo}>
        <h2 className={css.movieTitle}> {title || name}</h2>
        <p>User Score: {Math.round(vote_average * 10)}%</p>
        <p>Overview: {overview}</p>
        <p>
          Genres:{' '}
          {genres
            .map(genre => {
              return genre.name;
            })
            .join(', ')}
        </p>
      </div>
    </div>
  );
};
export default MovieCard;

MovieCard.propTypes = {
  movieData: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
    poster_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string.isRequired }).isRequired
    ).isRequired,
    vote_average: PropTypes.number.isRequired,
  }),
};
