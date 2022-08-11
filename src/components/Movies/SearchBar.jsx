import { Section } from 'components/Section/Section';
import { useState } from 'react';
export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState(null);

  const onQuerySubmit = e => {
    e.preventDefault();
    onSubmit(query);
  };
  const onQueryInput = e => {
    console.log(e.currentTarget.value);
    setQuery(e.currentTarget.value);
  };

  return (
    <Section>
      <form className="searchQuery" onSubmit={onQuerySubmit}>
        <input type="text" name="movieSearch" onChange={onQueryInput} />
        <button className="sumbitQuery" type="submit">
          Search
        </button>
      </form>
    </Section>
  );
};
