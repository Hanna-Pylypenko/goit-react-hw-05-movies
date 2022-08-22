import Section from 'components/Section/Section';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { moviesApi } from 'services/moviesApi';
import css from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    moviesApi.getMovieCast(movieId).then(({ data }) => setCast(data.cast));
  }, [movieId]);

  return (
    <Section>
      <div>
        {cast && (
          <ul className={css.castContainer}>
            {cast.map(actor => {
              return (
                <li key={actor.id}>
                  {actor.profile_path ? (
                    <img
                      src={`${moviesApi.POSTER_URL}${actor.profile_path}`}
                      width="150px"
                      alt={actor.name}
                    />
                  ) : (
                    <img
                      src={require('./no-poster.png')}
                      alt="No Poster"
                      width="150px"
                    />
                  )}
                  <p>Name: {actor.name}</p>
                  <p>Character: {actor.character}</p>
                </li>
              );
            })}
          </ul>
        )}
        {!cast && <p>Loading...</p>}
      </div>
    </Section>
  );
};
export default Cast;
