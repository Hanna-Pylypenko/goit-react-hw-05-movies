import Section from 'components/Section/Section';
import { useState } from 'react';

const SearchBar = ({ onSubmit, searchedMovie }) => {
  const [query, setQuery] = useState(searchedMovie ?? '');

  const onQuerySubmit = e => {
    e.preventDefault();
    if (query) {
      onSubmit(query);
    }
  };

  return (
    <Section>
      <form className="searchQuery" onSubmit={onQuerySubmit}>
        <input
          type="text"
          name="movieSearch"
          value={query}
          onChange={e => setQuery(e.currentTarget.value)}
        />
        <button className="sumbitQuery" type="submit">
          Search
        </button>
      </form>
    </Section>
  );
};
export default SearchBar;
