import Section from 'components/Section/Section';
import SearchBar from './SearchBar';
import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviesList';
import { moviesApi } from 'services/moviesApi';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryFromUrl = searchParams.get('query');
  const [totalPages, setTotalPages] = useState(null);
  const [query, setQuery] = useState(queryFromUrl ?? '');
  const [searchedMovies, setSearchedMovies] = useState(null);
  const location = useLocation();

  const onSubmit = data => {
    setQuery(data);
    setSearchParams(`?query=${data}`);
  };

  useEffect(() => {
    if (query) {
      moviesApi.getSearchedMovie(query).then(({ data }) => {
        setSearchedMovies(data.results);
        setTotalPages(data.total_pages);
      });
    }
  }, [query]);

  return (
    <Section>
      <SearchBar onSubmit={onSubmit} searchedMovie={query} />
      {totalPages === 0 && <h3>We didn't find anything.Try again.</h3>}
      {searchedMovies !== null && <MoviesList movies={searchedMovies} location={location}/>}
    </Section>
  );
};
export default Movies;
