import { moviesApi } from 'services/moviesApi';
export const MovieCard = ({ movieData }) => {
  const { title, name, poster_path, overview, genres, vote_average } =
    movieData;
  console.log(genres);
  return (
    <div>
      <img
        src={`${moviesApi.POSTER_URL}${poster_path}`}
        width="250px"
        alt={title || name}
      />
      <h2 className="movieTitle"> {title || name}</h2>
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
  );
};
