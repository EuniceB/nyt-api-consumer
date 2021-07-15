import { useSelector } from 'react-redux';
import { setPageAction } from '../actions/articles';
import useActions from '../hooks/useActions';
import styles from '../assets/styles/Pagination.module.css';

/**
 * Pagination component
 * Renders links to the previous and next pages of results
 */
const Pagination = () => {
  const page = useSelector((state) => state.articles.page);
  const setPage = useActions(setPageAction);

  return (
    <div className={styles.pagination}>
      <button type="button" onClick={() => setPage(page - 1)}>&lt; Prev page</button>
      <button type="button" onClick={() => setPage(page + 1)}>Next page &gt;</button>
    </div>
  );
};

export default Pagination;
