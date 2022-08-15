import { moviesApi } from 'services/moviesApi';
import css from './MovieCard.module.css';
const MovieCard = ({ movieData }) => {
  const { title, name, poster_path, overview, genres, vote_average } =
    movieData;
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
