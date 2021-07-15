import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Pagination from './Pagination';
import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import Loader from './Loader';
import useActions from '../hooks/useActions';
import { fetchArticlesAction } from '../actions/articles';

/**
 * HomePage component
 * Renders the landing page, with a search bar, the results and the pagination
 */
const HomePage = () => {
  const error = useSelector((state) => state.articles.error);
  const status = useSelector((state) => state.articles.status);
  const page = useSelector((state) => state.articles.page);
  const query = useSelector((state) => state.articles.query);
  const fetchArticles = useActions(fetchArticlesAction);

  useEffect(() => {
    fetchArticles(query, page);
  }, [query, page, fetchArticles]);

  return (
    <>
      <SearchBar />
      {status === 'errored' && <p className="errorMessage">{error}</p>}
      {status === 'loading' && <Loader />}
      {status === 'idle' && (
        <>
          <ArticleList />
          <Pagination />
        </>
      )}
    </>
  );
};

export default HomePage;
