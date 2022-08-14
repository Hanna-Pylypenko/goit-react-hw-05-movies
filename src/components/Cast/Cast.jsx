import { Section } from 'components/Section/Section';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { moviesApi } from 'services/moviesApi';
import css from './Cast.module.css';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  useEffect(() => {
    moviesApi.getMovieCast(movieId).then(({ data }) => setCast(data.cast));
  }, [movieId]);

  return (
    <Section>
      <div className={css.castContainer}>
        {cast &&
          cast.map(actor => {
            return (
              <li key={actor.id}>
                {actor.profile_path ? (
                  <img
                    src={`${moviesApi.POSTER_URL}${actor.profile_path}`}
                    width="150px"
                    alt={actor.name}
                  />
                ) : (
                  <img scr="./noPoster.jpg" alt="No poster available"></img>
                )}
                <p>Name: {actor.name}</p>
                <p>Character: {actor.character}</p>
              </li>
            );
          })}
      </div>
    </Section>
  );
};
