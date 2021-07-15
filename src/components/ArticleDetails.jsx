import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchArticleAction } from '../actions/articles';
import { formatDate } from '../helpers';
import useActions from '../hooks/useActions';
import Loader from './Loader';

/**
 * ArticleDetails component
 * Renders the page with the article details
 */
const ArticleDetails = () => {
  const { id } = useParams();
  const article = useSelector((state) => state.articles.current);
  const error = useSelector((state) => state.articles.error);
  const status = useSelector((state) => state.articles.status);
  const fetchArticle = useActions(fetchArticleAction);

  useEffect(() => {
    fetchArticle(id);
  }, [id, fetchArticle]);

  return (
    <>
      <Link to="/">&lt; Go to results page</Link>
      {status === 'errored' && <p className="errorMessage">{error}</p>}
      {status === 'loading' && <Loader />}
      {status === 'idle' && article && (
      <>
        <h1>{article.headline.main}</h1>
        <em>{formatDate(article.pub_date)}</em>
        <p>{article.lead_paragraph}</p>
        <a href={article.web_url}>Read the full article</a>
      </>
      )}
    </>
  );
};
export default ArticleDetails;
