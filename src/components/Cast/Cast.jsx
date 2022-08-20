import Section from 'components/Section/Section';
import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { moviesApi } from 'services/moviesApi';
import { Suspense } from 'react';
import { Loading } from 'notiflix';
import css from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { slug } = useParams();
  const movieId = slug.match(/[a-z0-9]+$/)[0];
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    moviesApi.getMovieCast(movieId).then(({ data }) => setCast(data.cast));
  }, [movieId]);

  return (
    <Suspense fallback={Loading.pulse()}>
      <Section fallback={Loading.remove()}>
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
          {!cast && <h3>No cast information</h3>}
        </div>
      </Section>
    </Suspense>
  );
};
export default Cast;
