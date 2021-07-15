import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { setQueryAction } from '../actions/articles';
import styles from '../assets/styles/SearchBar.module.css';
import useActions from '../hooks/useActions';

const WRITING_TIMER = 1000;

/**
 * SearchBar component
 * Text input that allows the user to search for articles
 */
const SearchBar = () => {
  const query = useSelector((state) => state.articles.query);
  const [tempQuery, setTempQuery] = useState(query);
  const setQuery = useActions(setQueryAction);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (query !== tempQuery) {
        setQuery(tempQuery);
      }
    }, WRITING_TIMER);
    return () => clearTimeout(timeout);
  }, [tempQuery, setQuery, query]);

  return (
    <>
      <h3>Type query search term in here:</h3>
      <input className={styles.search} value={tempQuery} type="text" onChange={(e) => setTempQuery(e.target.value)} />
    </>
  );
};

export default SearchBar;
