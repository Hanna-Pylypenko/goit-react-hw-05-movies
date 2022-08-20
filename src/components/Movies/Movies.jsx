import Section from 'components/Section/Section';
import SearchBar from './SearchBar';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviesList';
import { moviesApi } from 'services/moviesApi';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalPages, setTotalPages] = useState(null);
  const [query, setQuery] = useState(null);
  const [searchedMovies, setSearchedMovies] = useState(null);
  const onSubmit = data => {
    setQuery(data);
    setSearchParams(`?query=${query}`);
    console.log(searchParams);
  };
  useEffect(() => {
    if (query !== null) {
      moviesApi.getSearchedMovie(query).then(({ data }) => {
        setSearchedMovies(data.results);
        setTotalPages(data.total_pages);
      });
    }
  }, [query]);

  return (
    <Section>
      <SearchBar onSubmit={onSubmit} />
      {totalPages === 0 && <h3>We didn't find anything.Try again.</h3>}
      {searchedMovies !== null && <MoviesList movies={searchedMovies} />}
    </Section>
  );
};
export default Movies;
